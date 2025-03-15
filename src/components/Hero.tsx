
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-vvrm-blue to-vvrm-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-5">
            <span className="text-white/90 text-sm font-medium">AI-Powered Consulting</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Customer Experience Lifecycle
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            VVRMforce optimizes your customer journey through our proven four-pillar approach: 
            Vision, Value, Roadmap, and Measure — enhanced by AI for faster, better execution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-vvrm-teal hover:bg-vvrm-teal/90 text-white">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-vvrm-vision font-bold text-2xl md:text-3xl">Vision</div>
            <div className="text-white/80 text-sm">Discovery Phase</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-vvrm-value font-bold text-2xl md:text-3xl">Value</div>
            <div className="text-white/80 text-sm">Business Case</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-vvrm-roadmap font-bold text-2xl md:text-3xl">Roadmap</div>
            <div className="text-white/80 text-sm">Implementation Path</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="text-vvrm-measure font-bold text-2xl md:text-3xl">Measure</div>
            <div className="text-white/80 text-sm">ROI & Adjustments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
