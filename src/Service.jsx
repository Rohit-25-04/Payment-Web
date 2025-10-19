import React from "react";

const services = [
  {
    title: "💳 Easy Online Payments",
    desc: "Send and receive money instantly with secure payment gateways. No hidden fees, no delay — just seamless transactions.",
  },
  {
    title: "🏦 Bank Account Linking",
    desc: "Connect your bank account safely and start transferring money with just one click. Supports all major banks.",
  },
  {
    title: "📱 Mobile Wallet",
    desc: "Top up your wallet anytime and use it for instant payments, bill payments, and mobile recharges.",
  },
  {
    title: "🌍 Global Transfers",
    desc: "Send and receive money internationally with low transaction costs and complete security.",
  },
  {
    title: "🔒 Advanced Security",
    desc: "Your data and money are protected by AES encryption and multi-factor authentication.",
  },
  {
    title: "🕐 24/7 Customer Support",
    desc: "We’re always here to help you. Chat, email, or call us — support is available round the clock.",
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full bg-white shadow-md rounded-xl p-8 md:p-12">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Our Services
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-blue-500">PayEasy</span>, 
          we offer simple, secure, and reliable online payment solutions — 
          built to make your financial life easier and faster.
        </p>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-100 transition shadow-sm hover:shadow-md rounded-lg p-6 text-center"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Start Using PayEasy Today
          </h2>
          <p className="text-gray-600 mb-6">
            Download the app and experience seamless digital payments at your fingertips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Download App
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t mt-12 pt-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} PayEasy. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
