import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="prose lg:prose-xl m-auto">{children}</div>
);

export default Container;
