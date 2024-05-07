"use client";

import React, { useState } from "react";
import { logo, hamburger } from "@/app/assets/index";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="transition-all duration-300 flex items-center justify-between w-full py-10 px-8 lg:py-6 nav">
      <div className="transition-all duration-300 h-full lg:w-16 w-2 flex items-center basis-1/2">
        <a href="/">
          <Image src={logo} alt="logo" ></Image>
        </a>
        <h2 className="inline transition-all duration-300 md:px-7 px-5 font-bold font-k2d text-base md:text-lg">
          XEN
        </h2>
      </div>
      <div>
        {/* this is hamburger menu part */}
        <section className="flex md:hidden">
          <div className={`w-8 py-5 z-10`}>
            <div
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 h-10 w-10 text-[#232323]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                <svg
                  className="transition-all duration-300 h-10 w-10 text-white my-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 text-white">
                  <Link href={"/login"} className="link-underline">
                    About
                  </Link>
                </li>
                <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 text-white">
                  <Link href={"/"} className="link-underline">
                    Contact
                  </Link>
                </li>
                <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 text-white">
                  <Link href={"/"} className="link-underline">
                    Products
                  </Link>
                </li>
                <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 text-white">
                  <Link href={"/"} className="link-underline">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <ul className="transition-all duration-300 justify-start text-xl hidden md:flex basis-1/2">
          <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 ">
            <Link href={"/login"} className="link-underline">
              About
            </Link>
          </li>
          <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 ">
            <Link href={"/"} className="link-underline">
              Contact
            </Link>
          </li>
          <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 ">
            <Link href={"/"} className="link-underline">
              Products
            </Link>
          </li>
          <li className="transition-all duration-300 font-jura align-middle py-2 lg:py-3 inline-block px-8 xl:px-11 md:max-lg:px-4 ">
            <Link href={"/"} className="link-underline">
              Download
            </Link>
          </li>
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #0E0E0E;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      
    `}</style>
    </header>
  );
}
