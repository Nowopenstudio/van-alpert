import Link from "next/link"

export default function Navbar({ info }){
    return(
        <nav className="w-full relative flex justify-between mx-auto px-10 uppercase py-5 items-start">
            <div className="relative flex items-start">
                <Link href="/" className="font-nav mr-5">{info.title}</Link>
                <p className="font-nav">{info.desc}</p>
            </div>
            <div className="relative flex items-start w-1/4">
                <div className="mr-5 w-1/2">
                        <div><Link href="/projects" className="navItem w-full"> Projects</Link></div>
                        <div><Link href="/about" className="navItem w-full"> about</Link></div>
                  </div>
                <div className="w-1/2">
                   <div> <Link href="/" className="navItem w-full"> instagram</Link></div>
                   <div> <Link href="/" className="navItem w-full"> Email</Link></div>
                </div>
            </div>
        </nav>
    );
}