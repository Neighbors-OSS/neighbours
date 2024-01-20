import Link from "next/link";

const Nav = () => {
  return <nav className="flex h-[75px] w-full items-center bg-brand-950 p-2 px-6 text-white">
      <ul className="flex flex-row items-center justify-between flex-1">
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/auth/login'}>Login</Link></li>
      </ul>
  </nav>
}

export default Nav
