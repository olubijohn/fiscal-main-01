"use client";

import Image from "next/image";
import Link from "next/link";

export default function Section4() {
  return (
    <section className="bg-[#F5F5F7] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 rounded-full border-2 border-gray-900 px-8 py-3 inline-block">
            What we do
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-8 leading-tight">
            One Platform,
            <br />
            Multi-Possibilities
          </h2>
        </div>

        {/* EdgeCore Section - Image Left / Text Right */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <Image
              src="/illustration core.png"
              alt="EdgeCore illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              EdgeCore — For All Business Types,
              <br />
              Freelancers, and Entrepreneurs
            </h3>
            <p className="text-xl text-gray-600">
              Create, customize, and send invoices in minutes. Track payments,
              manage expenses, get paid faster and stay compliant with tax
              authorities all from one dashboard.
            </p>
            <Link
              href="#"
              className="inline-block text-blue-600 text-xl font-medium hover:underline mt-4"
            >
              LEARN MORE →
            </Link>
          </div>
        </div>

        {/* EdgeFiscal Section - NOW Image Right / Text Left */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6 lg:pr-12">
            {" "}
            {/* Text moved left */}
            <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              EdgeFiscal — For Tax-Compliant
              <br />
              Businesses
            </h3>
            <p className="text-xl text-gray-600">
              Built for businesses operating in countries with Smart Invoice
              mandates. Currently live in Zambia with the Zambian Revenue
              Authority integration, our platform offers real-time tax
              compliance, ERP integrations, alert systems, and fiscal device
              syncing with more country rollouts coming soon.
            </p>
            <Link
              href="#"
              className="inline-block text-blue-600 text-xl font-medium hover:underline mt-4"
            >
              LEARN MORE →
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            {" "}
            {/* Image moved right */}
            <Image
              src="/illustration fiscal.png"
              alt="EdgeFiscal illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
