
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-vvrm-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-vvrm-blue-light/50 backdrop-blur-sm rounded-3xl py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your customer experience?
            </h2>
            <p className="text-white/80 text-lg">
              Book a free consultation with our experts to discover how VVRMforce can optimize 
              your customer journey and drive measurable business results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://task-luminance.lovable.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-vvrm-teal hover:bg-vvrm-teal/90 text-white">
                Get Started
              </Button>
            </a>
            <Button variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/30">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
