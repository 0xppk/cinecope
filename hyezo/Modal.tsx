import { Dialog, Transition } from "@headlessui/react";
import { cva, VariantProps } from "cva";
import {
  ComponentProps,
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  useRef,
} from "react";
import { cn } from "./cn";

const modalStyles = cva(
  `w-full transform overflow-hidden rounded-xl text-left shadow-xl transition-all`,
  {
    variants: {
      width: {
        narrower: "max-w-xs",
        narrow: "max-w-sm",
        regular: "max-w-md",
        wide: "max-w-lg",
        wider: "max-w-2xl",
      },
      center: {
        true: "flex flex-col",
      },
      "bg-color": {
        white: "bg-white",
      },
    },
    defaultVariants: {
      width: "regular",
      "bg-color": "white",
    },
  },
);

type ModalStyleProps = VariantProps<typeof modalStyles>;

export interface ModalProps extends ModalStyleProps, ComponentProps<"div"> {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  center?: boolean;
}

export default function Modal({
  isOpen,
  setIsOpen,
  title,
  center,
  width,
  children,
  className,
  ...props
}: ModalProps) {
  const closeModal = () => setIsOpen(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" aria-hidden="true" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
          <div className="modal">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={cn(modalStyles({ width, center, className }))}>
                <Dialog.Title
                  as="h3"
                  className={`text-lg font-medium leading-6 text-gray-900 ${
                    center && "place-self-center"
                  }`}
                >
                  {title}
                </Dialog.Title>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

Modal.Content = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog.Description as="div" className="mt-5 text-sm text-gray-500">
      {children}
    </Dialog.Description>
  );
};
