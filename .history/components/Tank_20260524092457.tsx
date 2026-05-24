/*"use client";
import Specifications from "@/components/ui/Specifications";
import { Heart, Package, Share2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lightbox from "@/components/ui/Lightbox";

const Tank = () => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    { src: "/imgs/1.png" },
    { src: "/imgs/2.png" },
    { src: "/imgs/3.png" },
    { src: "/imgs/4.png" },
    { src: "/imgs/landing.png" },
    { src: "/imgs/6.png" },
    { src: "/imgs/7.png" },
    { src: "/imgs/8.png" },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-neutral-50 text-neutral-900 w-full overflow-x-clip min-h-fit"
      >
        <div className="relative w-full h-[101vh] lg:h-[120vh]">
          <Image
            priority
            alt="bg"
            src="/imgs/7.png"
            height={810}
            width={1080}
            className="w-full h-full object-cover brightness-[90%] object-[65%] sm:object-[80%] lg:object-top xl:object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col w-full h-full justify-center items-center text-white"
          >
            <h1 className="drop-shadow-2xl nova italic text-center">
              <span className="italic text-2xl">&quot;The Kennedy Darling&apos;s&quot;</span>
            </h1>
            <p className="italic text-2xl">Ornament of Choice </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full mb-9 mt-20 max-w-[1440px] mx-auto">
          <p className="mx-8 text-base uppercase nova text-neutral-500 mb-4">
            <Link href="/" aria-label="Link to Home page.">
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <span className="px-2">/</span>
            <span className="font-bold text-black cursor-pointer">Tank</span>
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-fit w-full max-w-[1440px] mx-auto">
            <div className="w-full h-fit text-center sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full h-auto max-w-[700px]">
                <Image
                  priority
                  alt="bg"
                  src="/imgs/1.png"
                  height={810}
                  width={1080}
                  className="w-full h-full object-cover brightness-90 object-[65%] sm:object-[80%] lg:object-top xl:object-cover cursor-pointer"
                  onClick={() => openLightbox(0)}
                />
              </motion.div>
            </div>

            <main className="min-h-screen text-neutral-900 flex flex-col items-center p-8">
              <motion.section            
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}     
                className="max-w-3xl w-full space-y-6">
                <h1 className="text-2xl nova font-extrabold uppercase">Tank Must SolarBeat™ Watch</h1>
                <p className={`text-xl leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
                  Tank Must watch, large model, photovoltaic SolarBeat™ movement. Steel case,
                  beaded crown set with a synthetic cabochon-shaped spinel, silvered dial,
                  blued-steel sword-shaped hands, black calfskin leather strap, steel ardillon
                  buckle. Case dimensions: 33.7 x 25.5 mm, thickness: 6.6 mm. Water-resistant
                  up to 3 bar (approx. 30 meters/100 feet).
                </p>
                <span
                  className="underline cursor-pointer text-sm"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Read Less" : "Read More"}
                </span>

                <h2 className="text-xl font-semibold">Cartier</h2>
                <ul className="space-y-3 font-semibold text-sm uppercase nova">
                  <li className="flex items-center gap-2">
                    <Package size={20} /> Complimentary shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <ShoppingBag size={24} /> Complimentary returns and exchanges
                  </li>
                </ul>
                <p className="text-2xl font-semibold tracking-widest">$3597.91</p>
                <div className="flex flex-col gap-2 nova text-neutral-50 text-sm tracking-wide font-semibold">
                  <button
                    type="button"
                    className="w-full py-2 flex items-center justify-center gap-2 bg-neutral-900 uppercase border
                    hover:cursor-pointer duration-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors 
                    hover:border border-neutral-900"
                  >
                    Contact an ambassador
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 bg-neutral-900 uppercase hover:cursor-pointer duration-500 
                    hover:bg-neutral-50 hover:text-neutral-900 border
                    transition-colors hover:border border-neutral-900"
                  >
                    Add to Wish List
                  </button>
                </div>

                <p className="text-sm uppercase nova my-8">
                  For more information, Please call 00800101335
                </p>

                <div className="flex flex-wrap gap-4 text-lg underline cursor-pointer capitalize">
                  <span>Book an Appointment</span>
                  <span className="flex items-center gap-1">
                    <Share2 size={14} /> Share
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={14} /> Save
                  </span>
                </div>
                <p className="text-xs text-neutral-500">Ref. WSTA0090</p>
              </motion.section>
            </main>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 sm:mb-20 px-4 w-full h-full gap-5 justify-items-center"
            >
              {images.slice(1, 4).map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt=""
                  height={750}
                  width={750}
                  className="w-full sm:h-[30vh] lg:h-[35vh] sm:w-auto h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(i + 1)}
                />
              ))}
            </motion.div>
          </section>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full h-[60vh] max-w-[1440px] mx-auto px-4"
          >
            <Image   
              alt="bg"
              src="/imgs/5.png"
              height={810}
              width={1080}
              className="w-full h-full object-cover brightness-90 grayscale-50
              object-[47%] sm:object-[80%] lg:object-top xl:object-cover"
              onClick={() => openLightbox(5)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 px-4 w-full h-full gap-24 max-w-[1440px] mx-auto"
          >
            <Image
              src="/imgs/12.png"
              alt=""
              height={995}
              width={639}
              className="w-full h-[45vh] object-contain cursor-pointer"
              onClick={() => openLightbox(5)}
            />
            <Image
              src="/imgs/13.jpg"
              alt=""
              height={1281}
              width={975}
              className="w-full h-[45vh] md:h-[55vh] object-contain cursor-pointer"
              onClick={() => openLightbox(6)}
            />
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid grid-cols-1 md:grid-cols-2 w-full mt-12 mb-16 md:mb-20 h-fit"
          >
            <div className="relative w-full h-[40vh] lg:h-[50vh] max-w-[1440px] mx-auto mt-12 px-4">
              <Image
                src="/imgs/landing.png"
                alt=""
                fill
                className="w-full h-full object-cover brightness-90 grayscale-50 object-[65%] sm:object-[80%] lg:object-top xl:object-cover cursor-pointer"
                onClick={() => openLightbox(7)}
              />
            </div>
            <main className="flex flex-col items-center p-8 my-auto">
              <div className="mt-12 border-t pt-6 space-y-4 max-w-md">
                <h3 className="text-xl font-semibold nova uppercase">Cartier Care</h3>
                <p className="text-lg mt-2 text-neutral-700 font-bold capitalize tracking-wide leading-relaxed">
                  Please enjoy an extension of the International Limited Warranty for up to 8 years
                  and take advantage of a wide range of exclusive services.
                </p>
                <button type="button" className="text-lg mt-3 underline cursor-pointer">
                  Discover More
                </button>
              </div>
            </main>
          </motion.section>
          <Specifications />
        </div>
      </motion.div>

      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  );
};

export default Tank;*/
"use client";

import Specifications from "@/components/ui/Specifications";
import { ArrowRight, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Lightbox from "@/components/ui/Lightbox";

const Tank = () => {
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    { src: "/imgs/1.png" },
    { src: "/imgs/2.png" },
    { src: "/imgs/3.png" },
    { src: "/imgs/4.png" },
    { src: "/imgs/landing.png" },
    { src: "/imgs/6.png" },
    { src: "/imgs/7.png" },
    { src: "/imgs/8.png" },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="
          bg-neutral-50 text-neutral-900
          overflow-hidden
        "
      >
        {/* Hero */}
        <section className="relative w-full h-[88vh] md:h-screen">
          <Image
            priority
            src="/imgs/7.png"
            alt="Tank Watch"
            fill
            className="
              object-cover
              object-[60%] 
              brightness-[92%]
            "
          />

          <div
            className="
              absolute inset-0
              flex flex-col items-center justify-center
              text-white text-center
              px-6
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <p
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[11px]
                  mb-6
                "
              >
                Cadré
              </p>

              <h1
                className="
                  text-[3rem] md:text-[6rem]
                  leading-[0.9]
                  tracking-[-0.04em]
                  font-extralight
                "
              >
                Ornament
                <br />
                of Choice.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div
          className="
            max-w-[1600px]
            mx-auto
            px-6 md:px-10
            pt-12
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.16em]
              text-neutral-400
            "
          >
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              Home
            </Link>

            <span className="mx-3">/</span>

            <span className="text-neutral-900">
              Tank Must SolarBeat™
            </span>
          </p>
        </div>

        {/* Main Product */}
        <section
          className="
            max-w-[1600px]
            mx-auto
            px-6 md:px-10
            pt-16 md:pt-24
            pb-28
            grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]
            gap-20 lg:gap-28
          "
        >
          {/* Left */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/imgs/1.png"
                alt=""
                width={1200}
                height={1600}
                onClick={() => openLightbox(0)}
                className="
                  w-full
                  h-auto
                  object-cover
                  cursor-pointer
                "
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {images.slice(1, 5).map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt=""
                  width={700}
                  height={900}
                  onClick={() => openLightbox(i + 1)}
                  className="
                    w-full
                    h-[40vh]
                    object-cover
                    cursor-pointer
                  "
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              lg:sticky
              lg:top-28
              h-fit
            "
          >
            <p
              className="
                uppercase
                tracking-[0.18em]
                text-[11px]
                text-neutral-400
                mb-5
              "
            >
              Cartier
            </p>

            <h2
              className="
                text-[2.4rem] md:text-[3.6rem]
                leading-[0.95]
                tracking-[-0.04em]
                font-extralight
                max-w-lg
              "
            >
              Tank Must SolarBeat™ Watch
            </h2>

            <p
              className="
                mt-10
                text-neutral-600
                leading-[1.9]
                text-[15px]
                max-w-xl
              "
            >
              {expanded
                ? `Tank Must watch, large model, photovoltaic SolarBeat™ movement.
                Steel case, beaded crown set with a synthetic cabochon-shaped
                spinel, silvered dial, blued-steel sword-shaped hands,
                black calfskin leather strap, steel ardillon buckle.
                Case dimensions: 33.7 x 25.5 mm, thickness: 6.6 mm.
                Water-resistant up to 3 bar.`
                : `Tank Must watch, large model, photovoltaic SolarBeat™ movement.
                Steel case, silvered dial, blued-steel sword-shaped hands,
                and black calfskin leather strap.`}
            </p>

            <button
              onClick={() => setExpanded(!expanded)}
              className="
                mt-5
                text-[11px]
                uppercase
                tracking-[0.16em]
                text-neutral-500
                hover:text-neutral-900
                transition-colors
                cursor-pointer
              "
            >
              {expanded ? "Read Less" : "Read More"}
            </button>

            <div
              className="
                mt-14
                pt-8
                border-t border-neutral-200
              "
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-neutral-400
                  mb-4
                "
              >
                Price
              </p>

              <p
                className="
                  text-[2rem]
                  tracking-[-0.03em]
                  font-extralight
                "
              >
                $3,597
              </p>
            </div>

            {/* Actions */}
            <div className="mt-14 flex flex-col gap-4">
              <button
                className="
                  group
                  flex items-center justify-between
                  border border-neutral-300
                  px-5 py-5
                  uppercase
                  tracking-[0.16em]
                  text-[11px]
                  hover:border-neutral-900
                  transition-all
                  duration-500
                  cursor-pointer
                "
              >
                Contact an Ambassador

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                className="
                  bg-neutral-900
                  text-white
                  px-5 py-5
                  uppercase
                  tracking-[0.16em]
                  text-[11px]
                  hover:bg-neutral-800
                  transition-colors
                  duration-500
                  cursor-pointer
                "
              >
                Add to Wish List
              </button>
            </div>

            {/* Meta */}
            <div
              className="
                mt-14
                flex items-center gap-8
                text-[11px]
                uppercase
                tracking-[0.16em]
                text-neutral-500
              "
            >
              <button className="flex items-center gap-2 hover:text-black transition-colors">
                <Share2 size={14} />
                Share
              </button>

              <button className="flex items-center gap-2 hover:text-black transition-colors">
                <Heart size={14} />
                Save
              </button>
            </div>

            <p
              className="
                mt-10
                text-[11px]
                uppercase
                tracking-[0.16em]
                text-neutral-400
              "
            >
              Ref. WSTA0090
            </p>
          </motion.div>
        </section>

        {/* Editorial Image */}
        <section
          className="
            max-w-[1600px]
            mx-auto
            px-6 md:px-10
            pb-32
          "
        >
          <Image
            src="/imgs/5.png"
            alt=""
            width={1800}
            height={1000}
            onClick={() => openLightbox(5)}
            className="
              w-full
              h-[70vh]
              object-cover
              grayscale-[20%]
              cursor-pointer
            "
          />
        </section>

        {/* Care Section */}
        <section
          className="
            max-w-[1600px]
            mx-auto
            px-6 md:px-10
            pb-36
            grid grid-cols-1 lg:grid-cols-2
            gap-20
            items-center
          "
        >
          <Image
            src="/imgs/landing.png"
            alt=""
            width={1000}
            height={1200}
            onClick={() => openLightbox(7)}
            className="
              w-full
              h-[70vh]
              object-cover
              cursor-pointer
            "
          />

          <div className="max-w-xl">
            <p
              className="
                uppercase
                tracking-[0.18em]
                text-[11px]
                text-neutral-400
                mb-6
              "
            >
              Cartier Care
            </p>

            <h3
              className="
                text-[2.2rem]
                md:text-[3.2rem]
                leading-[1]
                tracking-[-0.04em]
                font-extralight
              "
            >
              An extension
              <br />
              of permanence.
            </h3>

            <p
              className="
                mt-10
                text-neutral-600
                leading-[1.9]
                text-[15px]
              "
            >
              Please enjoy an extension of the International Limited Warranty
              for up to 8 years and take advantage of a wide range of exclusive
              services.
            </p>

            <button
              className="
                mt-10
                uppercase
                tracking-[0.16em]
                text-[11px]
                border-b border-neutral-900
                pb-1
                hover:opacity-50
                transition-opacity
              "
            >
              Discover More
            </button>
          </div>
        </section>

        <Specifications />
      </motion.div>

      <Lightbox
        images={images}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />
    </>
  );
};

export default Tank;