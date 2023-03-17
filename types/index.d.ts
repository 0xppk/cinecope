import { ReactNode } from "react";

declare global {
  type LayoutProps = {
    children: ReactNode;
    params?: any;
  };

  type PageProps = {
    params?: any;
  };
}
