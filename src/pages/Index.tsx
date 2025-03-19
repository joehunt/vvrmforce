
import { Search, DollarSign, MapPin, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PillarSection from '@/components/PillarSection';
import AiSection from '@/components/AiSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { VisionIcon, ValueIcon, RoadmapIcon, MeasureIcon } from '@/components/icons/PillarIcons';

const Index = () => {
  const pillars = [
    {
      id: "vision",
      title: "Vision",
      description: "The discovery phase designed to uncover inefficiencies across your customer experience lifecycle.",
      color: "vvrm-vision",
      icon: <Search size={24} className="text-vvrm-vision" />,
      bullets: [
        "Comprehensive customer journey mapping and analysis",
        "Identification of friction points and experience gaps",
        "Benchmarking against industry best practices",
        "AI-powered opportunity analysis and prioritization"
      ],
      imagePosition: "right",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "value",
      title: "Value",
      description: "Building the business case that quantifies the impact of optimizing your customer experience.",
      color: "vvrm-value",
      icon: <DollarSign size={24} className="text-vvrm-value" />,
      bullets: [
        "Financial impact modeling and ROI forecasting",
        "Customer lifetime value enhancement projections",
        "Operational efficiency and cost reduction analysis",
        "Competitive advantage assessment"
      ],
      imagePosition: "left",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "roadmap",
      title: "Roadmap",
      description: "Defining how to get from where you are to where you need to be, including timeline and investment required.",
      color: "vvrm-roadmap",
      icon: <MapPin size={24} className="text-vvrm-roadmap" />,
      bullets: [
        "Phased implementation strategy with clear milestones",
        "Resource allocation and timeline planning",
        "Technology integration requirements",
        "Change management and organizational readiness"
      ],
      imagePosition: "right",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "measure",
      title: "Measure",
      description: "Tracking ROI and making continuous adjustments to optimize outcomes and ensure success.",
      color: "vvrm-measure",
      icon: <BarChart size={24} className="text-vvrm-measure" />,
      bullets: [
        "Real-time performance dashboards and KPI tracking",
        "Customer feedback integration and analysis",
        "Continuous improvement cycles and optimization",
        "Long-term success measurement and reporting"
      ],
      imagePosition: "left",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {pillars.map((pillar) => (
        <PillarSection 
          key={pillar.id}
          id={pillar.id}
          title={pillar.title}
          description={pillar.description}
          color={pillar.color}
          icon={pillar.icon}
          bullets={pillar.bullets}
          imagePosition={pillar.imagePosition as 'left' | 'right'}
          imageUrl={pillar.imageUrl}
        />
      ))}
      
      <AiSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
