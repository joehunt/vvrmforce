
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-vvrm-blue mb-4">
              VVRM<span className="text-vvrm-teal">force</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transforming customer experiences through our four-pillar approach, 
              enhanced by artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-vvrm-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-vvrm-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-vvrm-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-vvrm-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-vvrm-blue mb-4">Our Approach</h3>
            <ul className="space-y-2">
              <li><a href="#vision" className="text-gray-600 hover:text-vvrm-vision transition-colors">Vision</a></li>
              <li><a href="#value" className="text-gray-600 hover:text-vvrm-value transition-colors">Value</a></li>
              <li><a href="#roadmap" className="text-gray-600 hover:text-vvrm-roadmap transition-colors">Roadmap</a></li>
              <li><a href="#measure" className="text-gray-600 hover:text-vvrm-measure transition-colors">Measure</a></li>
              <li><a href="#ai" className="text-gray-600 hover:text-vvrm-teal transition-colors">VVRMai</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-vvrm-blue mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-vvrm-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-vvrm-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-vvrm-blue transition-colors">Whitepapers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-vvrm-blue transition-colors">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-vvrm-blue mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">1234 Innovation Drive</li>
              <li className="text-gray-600">Suite 500</li>
              <li className="text-gray-600">San Francisco, CA 94103</li>
              <li><a href="tel:+14155550123" className="text-gray-600 hover:text-vvrm-blue transition-colors">+1 (415) 555-0123</a></li>
              <li><a href="mailto:info@vvrmforce.com" className="text-gray-600 hover:text-vvrm-blue transition-colors">info@vvrmforce.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} VVRMforce. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-vvrm-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-vvrm-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-vvrm-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
