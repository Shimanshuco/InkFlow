import Image from "next/image";
import React from "react";

function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 text-gray-400 py-4">


            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

                {/* Left */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="InkFlow" width={28} height={28} />
                    <span className="text-white text-sm font-medium">InkFlow</span>
                </div>

                {/* Right */}
                <div className="text-xs text-gray-500">
                    © {new Date().getFullYear()} InkFlow
                </div>

            </div>

        </footer>

    );
}

export default Footer;
