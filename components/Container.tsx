import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="m-auto p-4 max-w-screen-lg">{children}</div>
);

export default Container;
