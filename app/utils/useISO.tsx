import { useState, useEffect, useRef, DependencyList, useCallback } from "react";

interface ObserverConfig extends IntersectionObserverInit {
  freezeAfterVisible?: boolean;
}

export default function useISO<T extends HTMLElement = HTMLImageElement>(
  config: ObserverConfig = {},
  deps: DependencyList = [],
) {
  const imageRef = useRef<T[]>([]);
  const [isVisible, setIsVisible] = useState<boolean[]>([]);
  const handleRef = (ref: T) => {
    if (ref && !imageRef.current.includes(ref)) {
      imageRef.current.push(ref);
      setIsVisible(prev => [...prev, false]);
    }
  };

  const defaultConfig: ObserverConfig = {
    threshold: config.threshold || 0,
    root: config.root || null,
    rootMargin: config.rootMargin || "0%",
    freezeAfterVisible: config.freezeAfterVisible || false,
  };

  const { freezeAfterVisible, root, rootMargin, threshold } = defaultConfig;

  const updateEntry: IntersectionObserverCallback = useCallback(
    entries => {
      entries.forEach(entry => {
        const i = imageRef.current.findIndex(ref => ref === entry.target);
        if (i !== -1) {
          setIsVisible(prev => {
            const temp = [...prev];
            temp[i] = (freezeAfterVisible && temp[i]) || entry.isIntersecting;
            return temp;
          });
        }
      });
    },
    [imageRef, setIsVisible, freezeAfterVisible],
  );

  const frozen = isVisible.every(v => v === true);

  useEffect(() => {
    const node = imageRef?.current;
    const hasIOSupport = !!globalThis.IntersectionObserver;

    if (!hasIOSupport || !node[0] || frozen) return;

    const observerConfig = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerConfig);

    node.forEach(ref => observer.observe(ref));
    return () => observer.disconnect();
  }, [imageRef, updateEntry, threshold, root, rootMargin, frozen, ...deps]);

  return [handleRef, isVisible] as const;
}
