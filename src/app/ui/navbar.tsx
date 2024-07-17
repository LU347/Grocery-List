"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/icons/logoIcon";
import Menu from "../../../public/menu.svg";
import CloseButton from "../../../public/close.svg";
import { useState } from "react";

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/lists', label: 'Lists' },
    { href: '/account', label: 'Account' },
  ];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <Link href='/' className="flex items-center">
            <Logo className="m-2"/>
            <h1 className="test-2xl font-bold text-emerald-600 m-1">Grocery Buddy</h1>
            </Link>
            <div className="hidden sm:flex">
                <ul className="hidden sm:flex">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <li className="ml-10 uppercase hover:font-bold text-xl text-emerald-700 hover:border-b">{item.label}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <Image
                    src={Menu}
                    alt="menu icon"
                    width="25"
                    height="25"
                    className="md:hidden filter brightness-0"
                />
            </div>
        </div>
        <div className={
            menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
        >
        <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
                <Image
                    src={CloseButton}
                    alt="close menu icon"
                    width="25"
                    height="25"
                    className="filter brightness-0"
                />
            </div>
        </div>
            <div className="flex-col py-4">
                <ul>
                    <Link href="/">
                        <li
                         onClick={() => setMenuOpen(false)}
                         className="py-4 cursor-pointer"
                        >
                            Home
                        </li>
                    </Link>
                    <Link href="/lists">
                        <li 
                         onClick={() => setMenuOpen(false)}
                         className="py-4 cursor-pointer"
                        >
                            Lists
                        </li>
                    </Link>
                    <Link href="/account">
                        <li 
                        onClick={() => setMenuOpen(false)}
                        className="py-4 cursor-pointer"
                        >
                            Account
                        </li>
                    </Link>
                </ul>
            </div>

        </div>
    </nav>
    );
}