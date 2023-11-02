import React from 'react'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent">
            <div className="container p-12 flex justify-between">
                <Link
                    href={"/"}
                    className="text-2xl md:text-5xl"
                >
                    <img
                        width={70}
                        height={70}
                        src="/images/logo.png"
                        alt="Logo Image" />
                </Link>
            </div>
        </footer>
    );
};

