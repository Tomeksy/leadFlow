import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SourceCardProps {
  text: string;
  url: string;
}

const SourceCard: React.FC<SourceCardProps> = ({ text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 
                 hover:shadow-lg transition-all duration-300 ease-in-out
                 border border-transparent hover:border-blue-100
                 transform hover:-translate-y-1 hover:bg-white/90"
    >
      <div className="flex justify-between items-start gap-4">
        <p className="text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
          {text}
        </p>
        <ExternalLink className="h-5 w-5 flex-shrink-0 text-blue-600 group-hover:text-blue-700 
                                transition-colors duration-200 group-hover:scale-110" />
      </div>
    </a>
  );
};

export default SourceCard;