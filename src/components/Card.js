import { Droplets } from "lucide-react";
import PropTypes from "prop-types";

export default function Component(
  { image, alt, skill, summary } = {
    image: "/placeholder.svg?height=200&width=300",
    alt: "Plumbing service",
    skill: "Expert Plumbing",
    summary: "Professional plumbing services for all your needs.",
  }
) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={alt}
          className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full"
        />
      </div>
      <div className="bg-blue-600 p-4">
        <h3 className="flex items-center text-white text-xl font-bold">
          <Droplets className="mr-2 h-6 w-6" />
          {skill}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
      </div>
    </div>
  );
}

// Add prop types validation
Component.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  skill: PropTypes.string,
  summary: PropTypes.string,
};
