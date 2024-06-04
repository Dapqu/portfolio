"use client";

import {Sheet, SheetContent, SheetTrigger, SheetClose} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            "Dee" <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                
                {/* Navigation */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <SheetClose key={index} asChild>
                                <Link
                                    href={link.path} 
                                    className={`${
                                        link.path === pathname && "text-accent border-b-2 border-acccent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </nav>

            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;