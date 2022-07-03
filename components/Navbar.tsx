import Link from "next/link";
import { ReactNode } from "react";
import GithubLogo from "./GithubLogo";

const NavItem = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href}>
    <a className="group">
      <span className="inline-block px-4 py-4 hover:text-white hover:bg-primary-900 group-focus:text-white group-focus:bg-primary-900">
        {children}
      </span>
    </a>
  </Link>
);

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <NavItem href={"/"}>
          <b>bitlikethis</b>
        </NavItem>
        <NavItem href={"/"}>home</NavItem>
        <NavItem href={"/projects"}>projects</NavItem>
        <NavItem href={"/blog"}>blog</NavItem>
      </div>
      <div className="flex">
        <NavItem href={"https://github.com/bitlikethis"}>
          <GithubLogo />
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
