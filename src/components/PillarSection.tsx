
import { ReactNode } from 'react';

interface PillarProps {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: ReactNode;
  bullets: string[];
  imagePosition: 'left' | 'right';
  imageUrl: string; // New prop for the image URL
}

const PillarSection = ({ 
  id, 
  title, 
  description, 
  color, 
  icon, 
  bullets, 
  imagePosition,
  imageUrl 
}: PillarProps) => {
  const bgColorClass = `bg-${color}/10`;
  const borderColorClass = `border-${color}`;
  const textColorClass = `text-${color}`;
  
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
          
          <div className="w-full md:w-1/2 space-y-6">
            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${bgColorClass} ${borderColorClass} border`}>
              {icon}
              <span className={`text-sm font-medium ${textColorClass}`}>{title}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-vvrm-blue">
              {title}
            </h2>
            
            <p className="text-gray-600 text-lg">
              {description}
            </p>
            
            <ul className="space-y-3">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${bgColorClass}`}>
                    <div className={`w-2 h-2 rounded-full ${borderColorClass} bg-${color}`}></div>
                  </div>
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className={`rounded-2xl overflow-hidden border ${borderColorClass} aspect-video shadow-lg`}>
              <img 
                src={imageUrl} 
                alt={`${title} illustration`} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarSection;
