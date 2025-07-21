"use client";

import Image from "next/image";

export default function ApiIntegrationSection() {
  return (
    <section className="bg-[#F5F5F7] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered header section - border removed */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Well-Documented API Integration
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our team have written an extensive developer's documentation for
            easy integration with your existing systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image (now moved to left) */}
          <div className="relative w-full h-auto order-first">
            <Image
              src="/illustration api.png"
              alt="API Integration Illustration"
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Right Column - Bullet points */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">
                Create an API
              </h3>
              <p className="text-gray-600">
                Create an API end-point to be used to sync between your existing
                Point-Of-Sales system and our system to keep track on all your
                business transactions
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">
                Connect it with existing system
              </h3>
              <p className="text-gray-600">
                Connect with an existing point of sale system to immediately
                integrate your operations into our system
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-black">
                Start Receiving Data
              </h3>
              <p className="text-gray-600">
                Now, you can easily see all of your data being parsed onto our
                system from yours while we ensure your remittance to the
                government is taken care of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
