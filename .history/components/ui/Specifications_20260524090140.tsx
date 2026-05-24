/*"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = {
  Case: [
    { label: "Dimensions", value: "33.7 mm x 25.5 mm" },
    { label: "Material", value: "Steel" },
    { label: "Crown", value: "Blue" },
    { label: "Water Resistance", value: "Up to ~30 meters" },
    { label: "Glass", value: "Glace Carrée Rect" },
    { label: "Case-Back Material", value: "Steel" },
    { label: "Case Thickness", value: "6.60 mm" },
  ],
  Movement: [
    { label: "Watch Function", value: "Hours, Minutes" },
    { label: "Winding", value: "Quartz movement" },
  ],
  Hands: [
    { label: "Hand Shape", value: "Swords" },
    { label: "Hand Color", value: "Blue" },
    { label: "Hand Material", value: "Acier non-allié C60 1.1221" },
  ],
};

export default function Specifications() {
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("Case");
  return (
    <section className="relative w-full min-h-fit bg-neutral-100 
      px-4 pt-14"
    >
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-2xl mx-auto">
      <div className="flex border-b overflow-x-scroll scrollbar-hide">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof tabs)}
            className={`text-lg px-4 py-2 nova font-semibold 
              uppercase transition-colors hover:cursor-pointer ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-neutral-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative min-h-[570px] sm:min-h-[370px] mt-6 ml-1">
        <AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="absolute w-full"
  >
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 tracking-wide">
      {tabs[activeTab].map((item) => (
        <div key={item.label}>
          <dt className="font-semibold text-base uppercase text-neutral-600 nova">
            {item.label}
          </dt>
          <dd className="text-neutral-900 capitalize text-lg">{item.value}</dd>
        </div>
      ))}
    </dl>
  </motion.div>
        </AnimatePresence>
      </div>
      </motion.div>
    </section>
  );
}
  */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = {
  Case: [
    { label: "Dimensions", value: "33.7 mm × 25.5 mm" },
    { label: "Material", value: "Steel" },
    { label: "Crown", value: "Blue Spinel" },
    { label: "Water Resistance", value: "30 meters" },
    { label: "Glass", value: "Rectangular Crystal" },
    { label: "Case Back", value: "Steel" },
    { label: "Thickness", value: "6.60 mm" },
  ],
  Movement: [
    { label: "Function", value: "Hours, Minutes" },
    { label: "Type", value: "Quartz Movement" },
  ],
  Hands: [
    { label: "Shape", value: "Sword-Shaped" },
    { label: "Color", value: "Blue" },
    { label: "Material", value: "Acier non-allié C60 1.1221" },
  ],
};

export default function Specifications() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof tabs>("Case");

  return (
    <section
      className="
        border-t border-neutral-200
        bg-neutral-50
      "
    >
      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6 md:px-10
          py-28 md:py-36
        "
      >
        <div className="max-w-5xl">
          <p
            className="
              uppercase
              tracking-[0.18em]
              text-[11px]
              text-neutral-400
              mb-12
            "
          >
            Specifications
          </p>

          {/* Tabs */}
          <div
            className="
              flex gap-10
              border-b border-neutral-200
              overflow-x-auto
              pb-5
            "
          >
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab as keyof typeof tabs)
                }
                className={`
                  uppercase
                  tracking-[0.16em]
                  text-[11px]
                  transition-colors
                  whitespace-nowrap
                  cursor-pointer
                  ${
                    activeTab === tab
                      ? "text-neutral-900"
                      : "text-neutral-400 hover:text-neutral-900"
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="relative mt-16 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="
                  grid grid-cols-1 md:grid-cols-2
                  gap-x-24 gap-y-10
                "
              >
                {tabs[activeTab].map((item) => (
                  <div key={item.label}>
                    <dt
                      className="
                        uppercase
                        tracking-[0.16em]
                        text-[11px]
                        text-neutral-400
                        mb-3
                      "
                    >
                      {item.label}
                    </dt>

                    <div
                      className="
                        text-[1.1rem]
                        text-neutral-900
                        font-light
                        tracking-[-0.01em]
                      "
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}