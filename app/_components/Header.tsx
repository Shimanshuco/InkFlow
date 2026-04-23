"use client";

import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  const { isAuthenticated, user } = useKindeBrowserClient();

  return (
    <header className="bg-black margin-top-5">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src="/logo.png" alt="logo" width={100} height={100} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">

              {/* 🔁 Conditional rendering */}
              {!isAuthenticated ? (
                <>
                  <div className="block px-5 py-2.5 text-sm font-medium text-white">
                    <LoginLink postLoginRedirectURL="/dashboard">
                      Login
                    </LoginLink>
                  </div>

                  <div className="hidden sm:block px-5 py-2.5 text-sm font-medium bg-gray-100 text-black">
                    <RegisterLink>Register</RegisterLink>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden sm:block px-5 py-2.5 text-sm font-medium text-white"><a href="/dashboard">Dashboard</a></div>

                  <div className="px-5 py-2.5 text-sm font-medium bg-red-500 text-white rounded-md">
                    <LogoutLink>Logout</LogoutLink>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;