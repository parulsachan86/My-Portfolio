// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-y-8 lg:gap-12">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10 flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-snug lg:leading-[3.5rem]">
            Hello, I’m <br />
            <span className="text-pink-400">{personalData.name}</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mt-2 lg:mt-3">
              Developer by profession, problem solver by passion
            </span>
          </h1>
          <div className="my-8 sm:my-10 flex items-center gap-4 sm:gap-5 flex-wrap">
            {[
              {
                href: personalData.github,
                icon: <BsGithub size={28} />,
                label: "GitHub",
              },
              {
                href: personalData.linkedIn,
                icon: <BsLinkedin size={28} />,
                label: "LinkedIn",
              },
              {
                href: personalData.facebook,
                icon: <FaFacebook size={28} />,
                label: "Facebook",
              },
              {
                href: personalData.leetcode,
                icon: <SiLeetcode size={28} />,
                label: "LeetCode",
              },
              // { href: personalData.twitter, icon: <FaTwitterSquare size={28} />, label: "Twitter" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                className="relative text-pink-500 hover:text-pink-400 transition-all duration-300 group"
                aria-label={`Visit my ${link.label} profile`}
              >
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1a2332] text-white text-xs font-medium px-3 py-1 rounded-md shadow-md pointer-events-none">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* You can place the second flex child here if needed in future */}
      </div>
    </section>
  );
}

export default HeroSection;
