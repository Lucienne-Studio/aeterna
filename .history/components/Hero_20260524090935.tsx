/*
"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 10,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 2,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}      
      className="relative w-full h-[120vh] text-stone-50 
      px-6 md:px-8 lg:px-[97px]"
    >
      <Link href="/pr" aria-label="Link to Tank product page.">
        <div className="absolute inset-0">
          <Image
            alt="Jackie Kennendy wearing her Cartier Tank."
            height={1085}
            width={1600}
            src="/imgs/riva.png"
            className="h-full w-full object-cover object-[60%] brightness-[90%]"
          />
        <div 
          className="absolute inset-x-0 bottom-0 
          h-32 bg-gradient-to-t from-black/70 to-transparent 
          pointer-events-none" 
        />
      </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center w-full drop-shadow-2xl
            h-[85%] text-center  
            md:pb-40 lg:pb-0 lg:items-center lg:top-20"
        >
          <div className="space-y-2 text-left
              md:max-w-[55vw]
              lg:max-w-[30vw]"> 
            <h1 className="text-[40px] 
              mb-5 md:mb-9 
              capitalize monte text-white">
                The tank Heroine
            </h1> 
              <div className="group flex flex-col items-center w-fit gap-4 mx-auto">
                <button 
                  className="font-semibold uppercase text-xs nova hover:cursor-pointer">
                  Discover More
                </button>
              </div>    
          </div>
        </motion.div>
      </Link>
    </motion.section>
  );
};

export default Hero
*/
"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        scale: 1,
      },
      {
        scale: 1.04,
        duration: 12,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 24,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power3.out",
        delay: 0.4,
      }
    );
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        bg-neutral-50
      "
    >
      <Link
        href="/pr"
        aria-label="Link to Tank product page."
        className="block w-full h-full"
      >
        {/* Image */}
        <div
          ref={imageRef}
          className="
            absolute inset-0
            will-change-transform
          "
        >
          <Image
            priority
            src="/imgs/riva.png"
            alt="Jackie Kennedy wearing her Cartier Tank."
            fill
            className="
              object-cover
              object-[30%]
              sm:object-[62%]
              brightness-[88%]
            "
          />
        </div>

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-black/20
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/45
            via-black/10
            to-transparent
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10
            h-full
            max-w-[1600px]
            mx-auto
            px-6 md:px-10
            flex items-end
            pb-16 md:pb-24
          "
        >
          <motion.div
            ref={textRef}
            className="
              max-w-2xl
              text-white
            "
          >
            <p
              className="
                uppercase
                tracking-[0.22em]
                text-[11px]
                mb-7
                text-white/70
              "
            >
              The Tank Collection
            </p>

            <h1
              className="
                text-[3.8rem]
                md:text-[7rem]
                leading-[0.9]
                tracking-[-0.05em]
                font-extralight
                text-white
              "
            >
              The Tank
              <br />
              Heroine.
            </h1>

            <p
              className="
                mt-10
                max-w-md
                text-[15px]
                leading-[1.9]
                text-white/75
                font-light
              "
            >
              An object of permanence worn by women
              who understood restraint as power.
            </p>

            {/* CTA */}
            <div className="mt-12">
              <div
                className="
                  group
                  inline-flex items-center gap-4
                  uppercase
                  tracking-[0.18em]
                  text-[11px]
                "
              >
                <span className="text-white">
                  Discover More
                </span>

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.section>
  );
};

export default Hero;