import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import GithubLogo from "./GithubLogo";

const NavItem = ({
  href,
  children,
  showActive = false,
}: {
  href: string;
  children: ReactNode;
  showActive: boolean;
}) => {
  const { route } = useRouter();
  const isActive = route === href;
  return (
    <Link href={href}>
      <a>
        <span
          className={`inline-block px-4 py-4 ${
            showActive && isActive ? "text-white bg-primary-800" : ""
          } hover:text-white hover:bg-primary-800`}
        >
          {children}
        </span>
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <NavItem href={"/"} showActive={false}>
          <b>bit like this</b>
        </NavItem>
        <NavItem href={"/"} showActive>
          home
        </NavItem><NavItem href={"/projects"} showActive>
          projects
        </NavItem>
        <NavItem href={"/blog"} showActive>
          blog
        </NavItem>
      </div>
      <div className="flex">
        <NavItem href={"https://github.com/bitlikethis"} showActive>
          <GithubLogo />
        </NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
