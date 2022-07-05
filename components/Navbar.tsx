import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import BitLikeThisLogo from "./BitLikeThisLogo";
import GithubLogo from "./GithubLogo";

const NavItem = ({
  href,
  children,
  isActive = false,
}: {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}) => {
  return (
    <Link href={href}>
      <a>
        <span
          className={`inline-block p-4 hover:text-white hover:bg-primary-800 ${
            isActive ? "text-white bg-primary-800" : ""
          }`}
        >
          {children}
        </span>
      </a>
    </Link>
  );
};

const Navbar = () => {
  const { route } = useRouter();

  return (
    <nav className="flex justify-between mb-8">
      <div>
        <Link href="/">
          <a>
            <span className="inline-block p-4 space-x-4 text-white fill-white bg-primary-900">
              <BitLikeThisLogo className="inline w-6 h-6 -mt-1 fill-white" />
              <b>bit like this</b>
            </span>
          </a>
        </Link>
        <NavItem href="/" isActive={route === "/"}>
          home
        </NavItem>
        <NavItem href="/projects" isActive={route.startsWith("/projects")}>
          projects
        </NavItem>
        <NavItem href="/blog" isActive={route.startsWith("/blog")}>
          blog
        </NavItem>
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
