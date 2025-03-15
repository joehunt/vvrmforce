
import { Button } from '@/components/ui/button';
import { Zap, Sparkles, LineChart, Clock, Lightbulb } from 'lucide-react';

const AiSection = () => {
  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-vvrm-teal/10 text-vvrm-teal rounded-full px-3 py-1 border border-vvrm-teal mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-medium">AI-Powered Execution</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-vvrm-blue mb-6">
            Introducing VVRM<span className="text-vvrm-teal">ai</span>
          </h2>
          
          <p className="text-gray-600 text-lg">
            Our proprietary AI layer enhances every aspect of the customer experience optimization process, 
            delivering faster insights, smarter recommendations, and better outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-vvrm-teal/10 text-vvrm-teal rounded-lg flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-vvrm-blue mb-3">Faster Execution</h3>
            <p className="text-gray-600">
              Cut implementation time by up to 60% with AI-powered workflows and automation tools.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-vvrm-vision/10 text-vvrm-vision rounded-lg flex items-center justify-center mb-4">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-semibold text-vvrm-blue mb-3">Deeper Insights</h3>
            <p className="text-gray-600">
              Uncover hidden patterns and opportunities in your customer journey data.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-vvrm-roadmap/10 text-vvrm-roadmap rounded-lg flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold text-vvrm-blue mb-3">Real-time Adaptation</h3>
            <p className="text-gray-600">
              Continuously monitor and adjust your customer experience strategy as conditions change.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-vvrm-measure/10 text-vvrm-measure rounded-lg flex items-center justify-center mb-4">
              <LineChart size={24} />
            </div>
            <h3 className="text-xl font-semibold text-vvrm-blue mb-3">Predictive Analytics</h3>
            <p className="text-gray-600">
              Forecast outcomes and ROI with greater accuracy using advanced AI models.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-vvrm-blue to-vvrm-blue-light text-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Experience the VVRMai Difference</h3>
            <p className="mb-6">
              Our AI-enhanced approach doesn't replace human expertise – it amplifies it. 
              Your dedicated consultants work hand-in-hand with our AI systems to deliver 
              the optimal blend of strategic thinking and data-driven execution.
            </p>
            <Button className="bg-white text-vvrm-blue hover:bg-white/90">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;
