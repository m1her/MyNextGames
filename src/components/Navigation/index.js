"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="h-14 bg-[#3D0459] text-center">
      <div className="items-center mx-auto max-w-screen-xl p-4 ">
        <Link
          href="/"
          className="float-left -mt-2 -ml-6 -mr-36 text-white font-mono text-3xl font-semibold"
        >
          NextGames
        </Link>
        <Link
          href="/MemoryGame"
          className={`mx-10 text-white font-mono text-xl  ${
            pathName === "/MemoryGame" ? "underline font-semibold" : ""
          }`}
        >
          Memory Cards
        </Link>
        <Link
          href="/Tic-Tac-Toe"
          className={`mx-10 text-white font-mono text-xl  ${
            pathName === "/Tic-Tac-Toe" ? "underline font-semibold" : ""
          }`}
        >
          Tic Tac Toe
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
