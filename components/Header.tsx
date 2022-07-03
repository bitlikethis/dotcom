import Link from "next/link";

const Header = ()=> {
  return (
<div>
      <div>
        <Link href={"/"}>
          <a>bit like this</a>
        </Link>
      </div>
      <div>
        <Link href={"/about"}>
          <a>about</a>
        </Link>
        <Link href={"/projects"}>
          <a>projects</a>
        </Link>
        <Link href={"/contact"}>
          <a>contact</a>
        </Link>
        <Link href={"github"}>
          <a>github</a>
        </Link>
      </div>
    </div>
  )
}

export default Header;
