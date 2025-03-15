
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-vvrm-blue">
                VVRM<span className="text-vvrm-teal">force</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vision" className="text-sm font-medium text-gray-700 hover:text-vvrm-vision transition-colors duration-200">Vision</a>
            <a href="#value" className="text-sm font-medium text-gray-700 hover:text-vvrm-value transition-colors duration-200">Value</a>
            <a href="#roadmap" className="text-sm font-medium text-gray-700 hover:text-vvrm-roadmap transition-colors duration-200">Roadmap</a>
            <a href="#measure" className="text-sm font-medium text-gray-700 hover:text-vvrm-measure transition-colors duration-200">Measure</a>
            <a href="#ai" className="text-sm font-medium text-gray-700 hover:text-vvrm-teal transition-colors duration-200">VVRMai</a>
            <Button className="ml-4 bg-vvrm-blue hover:bg-vvrm-blue-light text-white">
              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#vision" className="text-sm font-medium text-gray-700 hover:text-vvrm-vision">Vision</a>
              <a href="#value" className="text-sm font-medium text-gray-700 hover:text-vvrm-value">Value</a>
              <a href="#roadmap" className="text-sm font-medium text-gray-700 hover:text-vvrm-roadmap">Roadmap</a>
              <a href="#measure" className="text-sm font-medium text-gray-700 hover:text-vvrm-measure">Measure</a>
              <a href="#ai" className="text-sm font-medium text-gray-700 hover:text-vvrm-teal">VVRMai</a>
              <Button className="bg-vvrm-blue hover:bg-vvrm-blue-light text-white">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
