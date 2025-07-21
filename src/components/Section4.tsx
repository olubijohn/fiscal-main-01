"use client";

import Image from "next/image";
import Link from "next/link";

export default function Section4() {
  return (
    <section className="bg-[#F5F5F7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 rounded-full border-2 border-gray-900 px-6 py-2 inline-block">
            What we do
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-6">
            One Platform, Multi-Possibilities
          </h2>
        </div>

        {/* Stats Row */}

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - EdgeCore */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/illustration core.png"
                alt="EdgeCore illustration"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                EdgeCore — For All Business Types, Freelancers, and
                Entrepreneurs
              </h3>
              <p className="text-gray-600 mb-6">
                Create, customize, and send invoices in minutes. Track payments,
                manage expenses, get paid faster and stay compliant with tax
                authorities all from one dashboard
              </p>
              <Link
                href="#"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>

          {/* Right Column - EdgeFiscal */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/illustration fiscal.png"
                alt="EdgeFiscal illustration"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                EdgeFiscal — For Tax-Compliant Businesses
              </h3>
              <p className="text-gray-600 mb-6">
                Built for businesses operating in countries with Smart Invoice
                mandates. Currently live in Zambia with the Zambian Revenue
                Authority integration, our platform offers real-time tax
                compliance, ERP integrations, alert systems, and fiscal device
                syncing with more country rollouts coming soon.
              </p>
              <Link
                href="#"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
