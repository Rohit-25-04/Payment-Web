 import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      <div className="max-w-5xl bg-white rounded-xl shadow-md p-8 md:p-12">
        
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          Welcome to <span className="font-semibold text-blue-500">PayEasy</span> — 
          your trusted partner for secure, fast, and easy online payments.  
          We believe sending or receiving money should be as simple as a tap.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">💡 Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make digital payments accessible to everyone — 
              individuals, freelancers, and businesses.  
              We’re here to simplify transactions while ensuring top-notch security and transparency.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">🚀 Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize how people move money across the world.  
              We envision a future where payments are instant, borderless, and stress-free for everyone.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Why Choose PayEasy?
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Easy and secure money transfer in just a few taps.</li>
            <li>✅ Supports all major banks and payment gateways.</li>
            <li>✅ 24/7 customer support in multiple languages.</li>
            <li>✅ Available on both Play Store and App Store.</li>
          </ul>
        </div>

        {/* Meet the Team */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            👨‍💻 Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Rohit Rawta", role: "Founder & CEO" },
              { name:"Rajat Suyal", role: "Lead Developer" },
              { name: "mohit Patel", role: "UI/UX Designer" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-gray-100 text-center p-5 rounded-lg hover:shadow-lg transition"
              >
                <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 font-bold rounded-full flex items-center justify-center text-2xl">
                  {member.name[0]}
                </div>
                <h3 className="mt-3 font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t pt-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} PayEasy. All Rights Reserved.</p>
          <p>Making Online Payments Simple, Secure & Smart 💙</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
