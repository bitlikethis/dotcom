import Link from "next/link";
import { ReactNode } from "react";

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href}>
    <a>
      <span className="inline-block px-4 py-4 hover:text-white hover:bg-primary-800">
        {children}
      </span>
    </a>
  </Link>
);

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <NavItem href={"/"}>bitlikethis</NavItem>
      </div>
      <div>
        <NavItem href={"/"}>home</NavItem>
        <NavItem href={"/projects"}>projects</NavItem>
        <NavItem href={"/blog"}>contact</NavItem>
        <NavItem href={"github"}>github</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
