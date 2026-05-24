/*"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [scrollDir, setScrollDir] = useState("up"); 
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }
      setScrolled(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full text-sm uppercase nova
        transition-all duration-500 ease-in-out
        ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "transparent text-neutral-50"}
        md:py-11 py-[24px] px-4 md:px-8`}
    >
      <div className="px-auto flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between gap-3 2xl:gap-4 max-w-fit">
          <div className="relative w-[18px] h-[18px]">
            <div className="absolute inset-0 flex flex-col justify-between mt-1 w-full h-2 lg:h-2.5 cursor-pointer">
              <span className="block w-full h-[1px] lg:h-[1.7px] bg-neutral-50 transition-all 
                drop-shadow-2xl duration-500 ease-in-out"></span>
              <span className="block w-full h-[1px] lg:h-[1.7px] bg-neutral-50 transition-all 
                drop-shadow-2xl duration-500 ease-in-out"></span>
            </div>            
          </div>
        </div>
        <div className="w-[108.8px] h-[31.19px]
          md:w-[160px] md:h-[45.59px] 
          absolute left-1/2 transform -translate-x-1/2"
        >
          <Link href="/" aria-label="Link to home page.">
            <Image
              src="/imgs/white-logo.svg"
              alt="Logo White"
              fill
              className="object-cover h-full w-full cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-3 max-w-fit">
          <div className="h-fit w-fit">
            <Search className="w-6 h-6 text-neutral-50 cursor-pointer" />
          </div>  
        </div>
      </div>
    </nav>
  );
};

export default */
"use client";

import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [scrollDir, setScrollDir] = useState("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      setScrolled(currentScrollY > 24);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
        ${
          scrolled
            ? "bg-neutral-50/85 backdrop-blur-xl border-b border-neutral-200"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6 md:px-10
          h-[78px] md:h-[92px]
          flex items-center justify-between
        "
      >
        {/* Left */}
        <div className="flex items-center gap-10">
          {/* Menu */}
          <button
            aria-label="Open Menu"
            className="
              group
              flex items-center gap-4
              uppercase
              tracking-[0.18em]
              text-[11px]
              cursor-pointer
            "
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`
                  block h-[1px] w-5 transition-all duration-500
                  ${scrolled ? "bg-neutral-900" : "bg-white"}
                `}
              />
              <span
                className={`
                  block h-[1px] w-3 group-hover:w-5
                  transition-all duration-500
                  ${scrolled ? "bg-neutral-900" : "bg-white"}
                `}
              />
            </div>

            <span
              className={`
                hidden md:block transition-colors duration-500
                ${scrolled ? "text-neutral-900" : "text-white"}
              `}
            >
              Menu
            </span>
          </button>
        </div>

        {/* Center Brand Name */}
{/* Center Brand Name */}
<div className="absolute left-1/2 -translate-x-1/2">
  <Link href="/" aria-label="Home" className="block">
    <span
      className={`
        text-[14px] md:text-[16px]
        tracking-[0.45em]
        uppercase
        font-light
        transition-colors duration-500
        ${
          scrolled
            ? "text-neutral-900"
            : "text-white"
        }
      `}
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Helvetica Neue, Arial, sans-serif",
        letterSpacing: "0.48em",
      }}
    >
      Auremont
    </span>
  </Link>
</div>

        {/* Right */}
        <div className="flex items-center gap-8">
          <button
            aria-label="Search"
            className="
              group
              flex items-center gap-3
              uppercase
              tracking-[0.18em]
              text-[11px]
              cursor-pointer
            "
          >
            <Search
              size={16}
              strokeWidth={1.5}
              className={`
                transition-colors duration-500
                ${scrolled ? "text-neutral-900" : "text-white"}
              `}
            />

            <span
              className={`
                hidden md:block transition-colors duration-500
                ${scrolled ? "text-neutral-900" : "text-white"}
              `}
            >
              Search
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;