"use client";

import React from "react";

interface DimensionItem {
  number: number;
  title: string;
  description: string;
}

interface GooeyDimensionsProps {
  items: DimensionItem[];
}

export const GooeyDimensions: React.FC<GooeyDimensionsProps> = ({ items }) => {
  // 为每个维度定义不同的位置和旋转角度，使用 transform 居中定位
  const positions = [
    { top: "-12px", left: "50%", translateX: "-50%", translateY: "0", rotate: "-2.52deg", width: "min(650px, 95vw)", zIndex: 20 },
    { top: "10%", left: "50%", translateX: "-50%", translateY: "0", rotate: "2.242deg", width: "min(780px, 95vw)", zIndex: 15 },
    { top: "50%", left: "50%", translateX: "calc(-50% - 250px)", translateY: "calc(-50% + 50px)", rotate: "-2.802deg", width: "min(699px, 90vw)", zIndex: 10 },
    { top: "85%", left: "50%", translateX: "-50%", translateY: "0", rotate: "2.929deg", width: "min(656px, 85vw)", zIndex: 12 },
    { top: "5%", left: "50%", translateX: "-50%", translateY: "0", rotate: "-1.5deg", width: "min(720px, 92vw)", zIndex: 18 },
  ];

  return (
    <div className="wrapper h-[45vh] scale-[0.35] md:h-[70vh] md:scale-[0.75] lg:h-[90vh] lg:scale-100 relative overflow-hidden mx-auto w-full flex justify-center items-center">
      {/* SVG Filters for Gooey Effect */}
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="absolute" style={{ willChange: "auto", transform: "translateZ(0)" }}>
        <defs>
          <filter id="shadowed-goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="shadow-blur" />
            <feColorMatrix
              in="shadow-blur"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0 -0.1"
              result="shadow-colored"
            />
            <feBlend in="shadow-blur" in2="shadow-colored" mode="multiply" result="shadow-combined" />
            <feBlend in="SourceGraphic" in2="shadow-combined" mode="normal" result="shadowed-gooey-shape" />
            <feColorMatrix
              in="shadowed-gooey-shape"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              result="shadowed-gooey-alpha"
            />
            <feOffset in="shadowed-gooey-alpha" dy="2.5" result="drop-shadow-offset-1" />
            <feGaussianBlur in="drop-shadow-offset-1" stdDeviation="12.5" result="drop-shadow-blur-1" />
            <feComposite in="drop-shadow-blur-1" in2="shadowed-gooey-alpha" operator="out" result="drop-shadow-shape-1" />
            <feColorMatrix
              in="drop-shadow-shape-1"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
              result="drop-shadow-colored-1"
            />
            <feBlend mode="normal" in="drop-shadow-colored-1" in2="BackgroundImageFix2" result="drop-effect1" />
            <feOffset in="shadowed-gooey-alpha" dy="0" result="drop-shadow-offset-2" />
            <feGaussianBlur in="drop-shadow-offset-2" stdDeviation="0" result="drop-shadow-blur-2" />
            <feComposite in="drop-shadow-blur-2" in2="shadowed-gooey-alpha" operator="out" result="drop-shadow-shape-2" />
            <feColorMatrix
              in="drop-shadow-shape-2"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
              result="drop-shadow-colored-2"
            />
            <feBlend mode="normal" in="drop-shadow-colored-2" in2="drop-effect1" result="combined-drop-shadows" />
            <feBlend mode="normal" in="shadowed-gooey-shape" in2="combined-drop-shadows" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>

      <div className="content relative" style={{ filter: "url(#goo)" }}>
        <div className="inner-content font-display relative mx-auto" style={{ width: "fit-content" }}>
          {items.map((item, index) => {
            const pos = positions[index] || positions[0];
            return (
              <div
                key={item.number}
                className="goo-oval relative z-10 flex min-h-[121px] items-center justify-center rounded-[64px] border-white/10 bg-white transition-all duration-300 hover:scale-105"
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.width,
                  zIndex: pos.zIndex,
                  boxShadow: "rgba(255, 255, 255, 0.1) 0px 0.887px 1.773px 0px inset, rgba(255, 255, 255, 0.1) 0px -0.887px 1.773px 0px inset",
                  transform: `translate3d(${pos.translateX || "0px"}, ${pos.translateY || "0px"}, 0px) rotate(${pos.rotate})`,
                }}
                role="button"
                tabIndex={0}
              >
                <div className="group relative px-6 py-4 text-center w-full">
                  <div className="text-[20px] sm:text-[28px] md:text-[40px] lg:text-[48px] leading-[95%] font-medium tracking-[-0.5px] md:tracking-[-1.68px] select-none bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
                    {item.number}. <strong className="font-semibold">{item.title}</strong>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Decorative goo blobs */}
          <div
            className="goo1 absolute -right-12 bottom-36 z-0 flex h-[120px] w-[120px] items-center justify-center rounded-[64px] bg-white"
            role="presentation"
            aria-hidden="true"
            style={{ transform: "translate3d(0px, 0px, 0px) scale(0.9308, 0.9308)" }}
          />
          <div
            className="goo2 absolute -right-32 bottom-20 z-0 flex h-[120px] w-[120px] items-center justify-center rounded-[64px] bg-white"
            role="presentation"
            aria-hidden="true"
            style={{ transform: "translate3d(0px, 0px, 0px) scale(0.9692, 0.9692)" }}
          />
          <div
            className="goo3 absolute bottom-1 left-15 z-0 flex h-[120px] w-[120px] items-center justify-center rounded-[64px] bg-white"
            role="presentation"
            aria-hidden="true"
            style={{ transform: "translate3d(-5.2597px, -23.6436px, 0px)" }}
          />
          <div
            className="goo4 absolute bottom-53 -left-25 z-0 flex h-[120px] w-[120px] items-center justify-center rounded-[64px] bg-white"
            role="presentation"
            aria-hidden="true"
            style={{ transform: "translate3d(-18.8949px, 9.3541px, 0px)" }}
          />
        </div>
      </div>
    </div>
  );
};

