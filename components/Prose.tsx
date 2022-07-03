import { ReactNode } from "react";

const Prose = ({ children }: { children: ReactNode }) => (
  <article className="prose lg:prose-xl m-auto prose-slate">{children}</article>
);

export default Prose;
