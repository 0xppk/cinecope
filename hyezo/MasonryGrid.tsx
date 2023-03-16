"use client";
import Image, { ImageProps } from "next/image";
import { useMemo } from "react";
import { useISO } from "hyezo/hooks";

type MasonryGridProps = {
  columns: number;
  src: string[];
};

export default function MasonryGrid({ columns, src }: MasonryGridProps) {
  const images = useMemo(() => getImageInfo(src), [src]);
  const cols = useMemo(() => getColumnImages(columns, images), [columns, images]);

  return (
    <>
      {cols.map((col, i) => {
        return (
          <div key={i} data-col-index={i} className="masonryColumn">
            {col.map(image => {
              return (
                <div key={image.id} className={`masonryImageWrapper`}>
                  <div className="masonryOverlay z-10">{image.title}</div>
                  <Img src={image.src} alt={image.title} width={9999} height={9999} />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

type Images = {
  id: number;
  title: string;
  src: string;
}[];

function getImageInfo(imageList: string[]) {
  return imageList.reduce((acc: Images, src: string, i: number) => {
    let image = {
      id: i,
      title: `Image ${i + 1}`,
      src,
    };
    return [...acc, image];
  }, []);
}

function getColumnImages(columns: number, images: Images) {
  const columnWrappers: Images[] = Array.from({ length: columns }, (_, i) => []);

  for (let i = 0; i < images.length; i++) {
    const column = i % columns;
    columnWrappers[column].push(images[i]);
  }
  return columnWrappers;
}

function Img({ ...props }: ImageProps) {
  const [ref, isVisible] = useISO();

  return (
    <Image
      {...props}
      ref={ref}
      className={`transform-gpu duration-1000 will-change-transform ${
        isVisible
          ? "opacity-1 translate-y-0 scale-100"
          : "translate-y-20 scale-50 opacity-0"
      }`}
    />
  );
}
