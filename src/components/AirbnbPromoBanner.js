import React from "react";
import { PhoneCall } from "lucide-react";

const AirbnbPromoBanner = () => {
  return (
    <div className="overflow-hidden bg-blue-600 text-white py-3 relative">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-lg font-semibold">
          Attention Airbnb Hosts! 24/7 Emergency Plumbing Services Available
        </span>
        <span className="mx-4 text-lg">
          Don't Let Plumbing Issues Ruin Your Guests' Stay
        </span>
        <span className="mx-4 text-lg font-semibold">
          Fast Response Time Guaranteed
        </span>
        <span className="mx-4 text-lg">
          Special Rates for Airbnb Properties
        </span>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold flex items-center hover:bg-blue-100 transition-colors duration-300">
          <PhoneCall className="mr-2" size={18} />
          Call Now
        </button>
      </div>
    </div>
  );
};

export default AirbnbPromoBanner;
