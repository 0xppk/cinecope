import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

export default async function DocLayout({ children }: LayoutProps) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
