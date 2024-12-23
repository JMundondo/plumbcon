import React from "react";
import { NavLink } from "react-router-dom";
import {
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import facebook from "../logo/facebook.jpg";
import twitter from "../logo/twitter.png";
import google from "../logo/google.jpg";
import linkedin from "../logo/linkedin.png";
import logo from "../logo/logo.jpeg";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const whatsappNumber = "+263773861795"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hello, I'd like to request plumbing services."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header>
      <div className="flex">
        <div className="bg-blue-500 w-1/3 p-3 flex items-center px-5">
          <span className="text-white font-bold text-[13px] md:text-[18px] company">
            Plumbcon
          </span>
        </div>
        <div className="bg-paleBlue w-2/3 p-3 flex justify-end items-center md:pr-20">
          <div className="flex space-x-3 items-center">
            <a
              href="https://www.facebook.com/plumbconzim?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <img className="circle" src={facebook} alt="facebook logo" />
            </a>
            <a
              href="https://x.com/plumbconzw?t=0s-dhyZCBN5D1o3fuQTdnQ&s=09"
              target="_blank"
              rel="noreferrer"
            >
              <img className="circle" src={twitter} alt="twitter logo" />
            </a>
            <a href="https://g.co/kgs/kf3CFEv" target="_blank" rel="noreferrer">
              <img className="circle" src={google} alt="google logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/plumbcon-zimbabwe/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="circle" src={linkedin} alt="linkedin logo" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white text-sm font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaWhatsapp className="mr-2 text-lg" />
              <span className="hidden sm:inline">Chat on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-between items-center py-2 px-3 md:px-10 bg-white">
        <div className="md:flex md:flex-col items-baseline hidden ">
          <NavLink to="/" className="link flex items-center">
            <img
              src={logo}
              alt="TwineLight Plumbing Logo"
              className="h-30 w-30 md:h-20 md:w-30 rounded-lg"
            />
            <span className="md:text-2xl mx-2 text-blue-900 font-bold">
              Plumbing with Precision
            </span>
          </NavLink>
        </div>
        <div className="flex md:space-x-20 space-x-5">
          <div className="flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
              <EnvelopeIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline">
              <p className="font-bold">Email us</p>
              <a
                href="mailto:sales@plumbconafrica.co.zw"
                className="text-sm grey"
              >
                sales@plumbconafrica.co.zw
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-3 items-center">
            <span className="border border-blue-400 p-2">
              <PhoneIcon className="h-6 w-6 text-blue-400" />
            </span>
            <div className="flex flex-col justify-center items-baseline">
              <p className="font-bold">Call us on</p>
              <a href="tel:+263773861795" className="text-sm grey">
                +263 77 386 1795
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="flex justify-center md:justify-between md:container items-center
        bg-paleBlue px-3 md:pr-0
        text-white mx-auto text-[12px] md:text-[15px] font-bold"
      >
        <ul className="flex space-x-4 md:space-x-10 md:mx-3 py-6">
          <NavLink className="link font-bold" to="/">
            HOME
          </NavLink>
          <li>
            <NavLink className="link font-bold" to="/about">
              ABOUT US
            </NavLink>
          </li>
          <li data-to-scrollspy-id="services">
            <NavLink className="link font-bold" to="/result">
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink className="link font-bold " to="/projects">
              PROJECTS
            </NavLink>
          </li>
        </ul>
        <li className="hidden md:block hover:opacity-90 active:bg-blue-700 bg-blue-500 px-5 py-6 font-bold">
          BLOG
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
