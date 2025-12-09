"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import LogoStudioAdorante from "@/assets/icons/LogoStudioAdorante";

const vociNav = [
  { name: "Home", path: "/" },
  { name: "Competenze", path: "/Competenze" },
  { name: "Contatti", path: "/Contatti" },
];

export default function Navbar() {
  const urlpagina = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <nav className="material w-full fixed top-0 z-20">
      <div className="relative m-auto flex items-center justify-between max-w-[1400] p-2.5 md:p-2.5">
        <Link href={"/"}>
          <LogoStudioAdorante />
        </Link>

        <div className="md:hidden ">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl align-top relative  "
          >
            {open ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        <ul className="hidden md:flex gap-5 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {vociNav.map((voce) => (
            <li key={voce.name}>
              <Link
                href={voce.path}
                className={`${
                  urlpagina === voce.path
                    ? "font-semibold"
                    : "font-normal opacity-70"
                } col-auto flex flex-col items-center`}
              >
                {voce.name}
                {/* {urlpagina === voce.path && (
                                    <div className='w-2 h-2 rounded-full bg-white'></div>
                                )} */}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={"/Contatti"}
          className="buttonPrimary rounded-3xl py-1 px-3 items-center hidden md:flex"
        >
          <span>Contattaci</span>
        </Link>
      </div>

      {open && (
        <div className=" w-full left-0 min-h-screen flex flex-col md:hidden">
          <ul className="left-0 flex-grow flex flex-col gap-5 pt-2.5">
            {vociNav.map((voce) => (
              <li key={voce.name}>
                <Link
                  href={voce.path}
                  onClick={() => setOpen(false)}
                  className={`${
                    urlpagina === voce.path
                      ? "font-semibold"
                      : "font-normal opacity-80"
                  } col-auto flex flex-col p-2.5 text-2xl`}
                >
                  {voce.name}
                  {/* {urlpagina === voce.path && (
                  <div className='w-2 h-2 rounded-full bg-white'></div>
              )} */}
                </Link>
              </li>
            ))}
            <div className="flex-grow"></div>
          </ul>
        </div>
      )}
    </nav>
  );
}
