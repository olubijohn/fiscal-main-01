"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log("isOpen changed:", isOpen);
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className="flex justify-between items-center py-5 px-4 md:px-[108px] bg-white text-black fixed w-full z-50"
        style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={110} height={39} />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          <NavItem path="/" label="Home" isActive={isActive} />
          <NavItem path="/about" label="About" isActive={isActive} />
          <li
            className={`relative p-2 flex justify-center items-center hover:border-primary group cursor-pointer ${
              isActive("/services") ? "border-b-2 border-primary" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <p
              className={`group-hover:text-primary ${
                isActive("/services") ? "text-primary" : ""
              }`}
            >
              Services
            </p>
            <FaChevronDown className="inline ml-2" size={12} />
            <DropDownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </li>
          <NavItem
            path="/documentation"
            label="Documentation"
            isActive={isActive}
          />
          <NavItem path="/support" label="Support" isActive={isActive} />
          <NavItem path="/contact" label="Contact" isActive={isActive} />
        </ul>

        <div className="hidden md:flex auth-links">
          <Link
            href="/login"
            className="text-primary px-3 py-2 uppercase transition-colors font-semibold"
          >
            Request a demo
          </Link>
          <button className="text-white bg-primary px-3 py-2 uppercase transition-colors hover:bg-secondary rounded-[7px] cursor-pointer">
            My Account
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-white z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)" }}
      >
        <ul className="flex flex-col space-y-2 p-4">
          <MobileNavItem path="/" label="Home" isActive={isActive} />
          <MobileNavItem path="/about" label="About" isActive={isActive} />
          <div
            className="p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center justify-between">
              <span
                className={`${isActive("/services") ? "text-primary" : ""}`}
              >
                Services
              </span>
              <FaChevronDown
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                size={12}
              />
            </div>
            {isOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <MobileDropdownItem
                  icon="/smart.png"
                  title="Smart Invoice"
                  description="Africa's No.1 Tax-Compliant Smart Invoice"
                />
                <MobileDropdownItem
                  icon="/edge.png"
                  title="EdgeCore"
                  description="Send unlimited invoices with EdgeCore"
                />
              </div>
            )}
          </div>
          <MobileNavItem
            path="/documentation"
            label="Documentation"
            isActive={isActive}
          />
          <MobileNavItem path="/support" label="Support" isActive={isActive} />
          <MobileNavItem path="/contact" label="Contact" isActive={isActive} />
        </ul>
        <div className="p-4 flex flex-col space-y-2">
          <Link
            href="/login"
            className="text-primary px-3 py-2 uppercase transition-colors font-semibold text-center"
          >
            Request a demo
          </Link>
          <button className="text-white bg-primary px-3 py-2 uppercase transition-colors hover:bg-secondary rounded-[7px] cursor-pointer">
            My Account
          </button>
        </div>
      </div>
    </>
  );
}

interface NavItemProps {
  path: string;
  label: string;
  isActive: (path: string) => boolean;
}

const NavItem = ({ path, label, isActive }: NavItemProps) => (
  <li
    className={`p-2 hover:border-primary group cursor-pointer ${
      isActive(path) ? "border-b-2 border-primary" : ""
    }`}
  >
    <Link
      href={path}
      className={`group-hover:text-primary ${
        isActive(path) ? "text-primary" : ""
      }`}
    >
      {label}
    </Link>
  </li>
);

const MobileNavItem = ({ path, label, isActive }: NavItemProps) => (
  <li
    className={`p-2 hover:bg-gray-100 rounded cursor-pointer ${
      isActive(path) ? "text-primary" : ""
    }`}
  >
    <Link href={path} className="block">
      {label}
    </Link>
  </li>
);

interface DropDownMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DropDownMenu = ({ isOpen, setIsOpen }: DropDownMenuProps) => {
  return (
    <div
      className={`absolute transition-all duration-300 top-14 -right-48 bg-white rounded-lg mt-2 p-3 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{
        boxShadow: "0px 12px 24px -4px #1018281A",
      }}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownItem
        icon="/smart.png"
        title="Smart Invoice"
        description="Africa's No.1 Tax-Compliant Smart Invoice"
      />
      <DropdownItem
        icon="/edge.png"
        title="EdgeCore"
        description="Send unlimited invoices with EdgeCore"
      />
    </div>
  );
};

interface DropdownItemProps {
  icon: string;
  title: string;
  description: string;
}

const DropdownItem = ({ icon, title, description }: DropdownItemProps) => (
  <div className="w-[391px] h-[82px] flex items-center gap-4 p-5 hover:bg-[#F2F2F5] rounded-lg transition-colors cursor-pointer">
    <div>
      <Image src={icon} alt="Logo" width={40} height={40} />
    </div>
    <div>
      <h2 className="text-[18px] font-semibold text-[#202029]">{title}</h2>
      <p className="text-[14px] text-[#3C3C4E]">{description}</p>
    </div>
  </div>
);

const MobileDropdownItem = ({
  icon,
  title,
  description,
}: DropdownItemProps) => (
  <div className="flex items-center gap-4 p-3 hover:bg-[#F2F2F5] rounded-lg transition-colors cursor-pointer">
    <div>
      <Image src={icon} alt="Logo" width={30} height={30} />
    </div>
    <div>
      <h2 className="text-[16px] font-semibold text-[#202029]">{title}</h2>
      <p className="text-[12px] text-[#3C3C4E]">{description}</p>
    </div>
  </div>
);

export default Navbar;
