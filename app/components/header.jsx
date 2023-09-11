import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="logo">
                <Link href="/">This is in the logo component</Link>
            </div>
            <div className="links">
                <Link href="/about">About</Link>
                <Link href="/about/team">Our Team</Link>
                <Link href="/projects">Our Projects</Link>
                <Link href="/info/code">Some GitHub Repos</Link>
            </div>
        </div>
    </header>
  )
}

export default Header