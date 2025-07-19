"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen changed:", isOpen);
  }, [isOpen]);
  // Only apply active styles after mounting
  const isActive = (path) => pathname === path;
  return (
    <nav
      className="flex justify-between items-center py-5 px-[108px] bg-white text-black"
      style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)" }}
      onClick={() => setIsOpen(false)}
    >
      <div className="logo">
        <Image src="/logo.png" alt="Logo" width={110} height={39} />
      </div>
      <ul className="flex space-x-4">
        <li
          className={`p-2 hover:border-primary group cursor-pointer ${
            isActive("/") ? "border-b-2 border-primary" : ""
          }`}
        >
          <Link
            href="/"
            className={`group-hover:text-primary ${
              isActive("/") ? "text-primary" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li
          className={`p-2 hover:border-primary group cursor-pointer ${
            isActive("/about") ? "border-b-2 border-primary" : ""
          }`}
        >
          <Link
            href="/about"
            className={`group-hover:text-primary ${
              isActive("/about") ? "text-primary" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li
          className={`relative p-2 flex justify-center items-center hover:border-primary group cursor-pointer ${
            isActive("/services") ? "border-b-2 border-primary" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p
            className={`group-hover:text-primary ${
              isActive("/services") ? "text-primary" : ""
            }`}
          >
            Services
          </p>
          <FaChevronDown className="inline ml-2" size={12} />
          <DropDownMenu isOpen={isOpen} />
        </li>
        <li
          className={`p-2 hover:border-primary group cursor-pointer ${
            isActive("/documentation") ? "border-b-2 border-primary" : ""
          }`}
        >
          <Link
            href="/documentation"
            className={`group-hover:text-primary ${
              isActive("/documentation") ? "text-primary" : ""
            }`}
          >
            Documentation
          </Link>
        </li>
        <li
          className={`p-2 hover:border-primary group cursor-pointer ${
            isActive("/support") ? "border-b-2 border-primary" : ""
          }`}
        >
          <Link
            href="/support"
            className={`group-hover:text-primary ${
              isActive("/support") ? "text-primary" : ""
            }`}
          >
            Support
          </Link>
        </li>
        <li
          className={`p-2 hover:border-primary group cursor-pointer ${
            isActive("/contact") ? "border-b-2 border-primary" : ""
          }`}
        >
          <Link
            href="/contact"
            className={`group-hover:text-primary ${
              isActive("/contact") ? "text-primary" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="auth-links">
        <Link
          href="/login"
          className="text-primary px-3 py-2 uppercase transition-colors font-semibold"
        >
          Request a demo
        </Link>
        <button
          className="text-white bg-primary px-3 py-2 uppercase transition-colors hover:bg-secondary rounded-[7px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          My Account
        </button>
      </div>
    </nav>
  );
}

function DropDownMenu({ isOpen }) {
  return (
    <div
      className={`absolute transition-all top-14 -right-48 bg-white rounded-lg mt-2 p-3 ${
        isOpen ? "visible" : "invisible"
      }`}
      style={{
        boxShadow: "0px 12px 24px -4px #1018281A",
      }}
    >
      <div className="w-[391px] h-[82px] flex items-center gap-4 p-5 hover:bg-[#F2F2F5] rounded-lg transition-colors cursor-pointer">
        <div>
          <Image src="/smart.png" alt="Logo" width={40} height={40} />
        </div>
        <div>
          <h2 className="text-[18px] font-semibold text-[#202029]">
            Smart Invoice
          </h2>
          <p className="text-[14px] text-[#3C3C4E]">
            Africa’s No.1 Tax-Compliant Smart Invoice
          </p>
        </div>
      </div>
      <div className="w-[391px] h-[82px] flex items-center gap-4 p-5 hover:bg-[#F2F2F5] rounded-lg transition-colors cursor-pointer">
        <div>
          <Image src="/edge.png" alt="Logo" width={40} height={40} />
        </div>
        <div>
          <h2 className="text-[18px] font-semibold text-[#202029]">EdgeCore</h2>
          <p className="text-[14px] text-[#3C3C4E]">
            Send unlimited invoices with EdgeCore
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
