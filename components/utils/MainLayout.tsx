import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="max-w-[90rem]  mx-auto">{children}</div>;
}
