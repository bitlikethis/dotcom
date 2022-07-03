import Link from "next/link";
import { ReactNode } from "react";

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href}>
    <a><span className="inline-block px-4 py-4 hover:text-white hover:bg-black">{children}</span></a>
  </Link>
);

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <NavItem href={"/"}>
          <a>bit like this</a>
        </NavItem>
      </div>
      <div>
        <NavItem href={"/about"}>
          <a>about</a>
        </NavItem>
        <NavItem href={"/projects"}>
          <a>projects</a>
        </NavItem>
        <NavItem href={"/contact"}>
          <a>contact</a>
        </NavItem>
        <NavItem href={"github"}>
          <a>github</a>
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
