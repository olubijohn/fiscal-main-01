"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#F5F5F7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          {/* Updated badge with white border */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 rounded-full border-9 border-white px-6 py-2 inline-block">
            Who we are
          </h1>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Simplifying Invoicing.
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Strengthening Fiscal
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Compliance
            </h2>
          </div>

          <p className="text-lg text-gray-600">
            Fiscal Edge simplifies invoicing for freelancers, small business
            owners, and large enterprises, ensuring full tax compliance through
            direct integration with government tax authorities. Whether billing
            clients or managing transactions, We provides the tools and
            reliability needed for African businesses to grow and thrive.
          </p>

          <Link
            href="/about"
            className="inline-block text-blue-600 px-0 py-3 font-medium hover:underline transition-colors"
          >
            LEARN MORE →
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-auto">
          <Image
            src="/illustration.png"
            alt="Financial statistics illustration"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
