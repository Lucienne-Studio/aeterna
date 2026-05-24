/*import React from 'react'
import FooterLinks from './ui/FooterLinks'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-neutral-900 pt-28 pb-12 text-sm nova bg-neutral-50
    font-light min-h-fit uppercase tracking-widest
    ">
      <div className="max-w-[1440px] w-full mx-auto md:px-8 px-4"
      >
      <div className="font-normal w-full text-center tracking-wider py-28 
        border-y border-zinc-300 flex flex-col gap-9"
      >
        <h2 className="text-xl mb-1">Subscribe to our Newsletter</h2>
        <div className="flex w-full md:max-w-lg md:mx-auto
          lg:max-w-md"
        >
          <input
            type="email"
            placeholder="Email"
            className="flex-1 border-b border-neutral-900 px-3 py-2
            text-sm outline-none uppercase"
          />
          <button
            type="submit"
            className="bg-neutral-900 text-white px-2 py-2 text-xs
            font-normal tracking-widest uppercase hover:cursor-pointer
            hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-500
            border border-neutral-900"
          >
            Subscribe
          </button>
        </div>
      </div>   
        <div className="grid grid-cols-1 lg:grid-cols-3 w-fit items-center px-auto mx-auto py-9">
          <FooterLinks
            title="CUSTOMER CARE"
            links={["CONTACT US", "Call Now: 00800101335", "FAQ"]}
          />
          <FooterLinks
            title="OUR COMPANY"
            links={["FIND A BOUTIQUE", "CAREERS", "CARTIER AND CORPORATE SOCIAL RESPONSIBILITY"]}
          />
          <FooterLinks
            title="LEGAL AREA"
            links={["TERMS OF USE", "PRIVACY POLICY", "CREDITS"]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full 
          px-auto mx-auto py-12 gap-14 justify-items-center"
        > 
           <Image
            src="/imgs/women.avif"
            alt="Customer Care"
            width={429}
            height={190}
            className="w-[84.8] md:w-[71.41] h-auto object-cover"
          />
          <Image
            src="/imgs/foundation.png"
            alt="Legal Area"
            width={400}
            height={300}
            className="w-[174.34px] md:w-[146.81] h-auto object-cover"
          />
          <Image
            src="/imgs/philanthropy.avif"
            alt="Legal Area"
            width={400}
            height={300}
            className="w-[100.67] md:w-[84.78] h-auto object-cover"
          />
        </div>
      </div>

    </footer>
  )
}

export default */
// Footer.tsx

import React from "react";
import FooterLinks from "./ui/FooterLinks";

const Footer = () => {
  return (
    <footer
      className="
        w-full bg-neutral-50 text-neutral-900
        border-t border-neutral-200
      "
    >
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 md:px-10
          pt-28 md:pt-40
          pb-10
        "
      >
        {/* Editorial Statement */}
        <div className="max-w-3xl">
          <p
            className="
              text-[2rem] md:text-[4.5rem]
              leading-[0.95]
              tracking-[-0.04em]
              font-extralight
            "
          >
            Objects of permanence.
          </p>

          <p
            className="
              mt-8
              text-sm
              tracking-[0.18em]
              uppercase
              text-neutral-500
            "
          >
            Designed with restraint.
          </p>
        </div>

        {/* Newsletter */}
        <div className="mt-24 md:mt-32 max-w-xl">
          <div
            className="
              flex items-center
              border-b border-neutral-400
              pb-3
            "
          >
            <input
              type="email"
              placeholder="Email Address"
              className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                tracking-[0.08em]
                uppercase
                placeholder:text-neutral-400
              "
            />

            <button
              className="
                text-sm
                tracking-[0.14em]
                uppercase
                hover:opacity-50
                transition-opacity
                duration-300
              "
            >
              →
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-28 md:mt-36">
          <FooterLinks />
        </div>

        {/* Bottom Row */}
        <div
          className="
            mt-28
            pt-6
            border-t border-neutral-200
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-4
          "
        >
          <p
            className="
              text-[11px]
              tracking-[0.14em]
              uppercase
              text-neutral-500
            "
          >
            © 2026 Aeterna
          </p>

          <p
            className="
              text-[11px]
              tracking-[0.14em]
              uppercase
              text-neutral-500
            "
          >
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;