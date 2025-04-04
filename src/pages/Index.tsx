
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { AlertTriangle, BarChart3, Leaf, Radio, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Index() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    howItWorks: false,
    testimonials: false,
    cta: false
  });

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    howItWorks: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    cta: useRef<HTMLElement>(null)
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setIsVisible(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRefs.hero.current) observer.observe(sectionRefs.hero.current);
    if (sectionRefs.features.current) observer.observe(sectionRefs.features.current);
    if (sectionRefs.howItWorks.current) observer.observe(sectionRefs.howItWorks.current);
    if (sectionRefs.testimonials.current) observer.observe(sectionRefs.testimonials.current);
    if (sectionRefs.cta.current) observer.observe(sectionRefs.cta.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={sectionRefs.hero} id="hero" className="relative py-20 md:py-32 honeycomb-pattern overflow-hidden">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible.hero ? 'slide-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
                <span className="flex h-2 w-2 rounded-full bg-honey-500 animate-pulse mr-2"></span>
                AI-powered bee swarm prediction
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Save your hives with intelligent swarm prediction
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                BeePulse helps beekeepers prevent colony losses by detecting swarm patterns 
                before they happen, using acoustic monitoring and AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="pulse-glow-animation" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className={`flex justify-center perspective-container ${isVisible.hero ? 'fade-in delay-300' : 'opacity-0'}`}>
              <div className="relative w-full max-w-md card-3d">
                <div className="absolute -left-4 -top-4 w-64 h-64 bg-honey-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
                <div className="relative rounded-2xl border bg-card p-6 shadow-lg hover-3d">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold">Live Swarm Risk</h3>
                    <span className="text-xs text-muted-foreground">Now</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-background feature-card">
                      <div>
                        <p className="font-medium">Garden Hive</p>
                        <p className="text-xs text-muted-foreground">Last update: 5 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Low Risk
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-background feature-card">
                      <div>
                        <p className="font-medium">Orchard Hive</p>
                        <p className="text-xs text-muted-foreground">Last update: 2 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        High Risk
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-background feature-card">
                      <div>
                        <p className="font-medium">Meadow Hive</p>
                        <p className="text-xs text-muted-foreground">Last update: 8 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                        Medium Risk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={sectionRefs.features} id="features" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className={`text-center mb-16 ${isVisible.features ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Smart Beekeeping Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered system monitors your hives 24/7 and alerts you before
              swarms happen, so you can take action and save your colonies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`flex flex-col p-6 bg-card rounded-xl border shadow-sm feature-card ${isVisible.features ? 'slide-in-bottom delay-100' : 'opacity-0'}`}>
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center mb-5 honeycomb-icon">
                <Radio className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acoustic Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Advanced sensors detect changes in bee colony sounds that indicate
                potential swarming behavior before it happens.
              </p>
              <div className="mt-auto pt-4">
                <Link to="/acoustic-monitoring" className="text-honey-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className={`flex flex-col p-6 bg-card rounded-xl border shadow-sm feature-card ${isVisible.features ? 'slide-in-bottom delay-300' : 'opacity-0'}`}>
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center mb-5 honeycomb-icon">
                <BarChart3 className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Predictions</h3>
              <p className="text-muted-foreground mb-4">
                Our machine learning algorithms analyze acoustic patterns and environmental
                data to predict swarm likelihood with high accuracy.
              </p>
              <div className="mt-auto pt-4">
                <Link to="/ai-predictions" className="text-honey-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className={`flex flex-col p-6 bg-card rounded-xl border shadow-sm feature-card ${isVisible.features ? 'slide-in-bottom delay-500' : 'opacity-0'}`}>
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center mb-5 honeycomb-icon">
                <Shield className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Alerts</h3>
              <p className="text-muted-foreground mb-4">
                Receive real-time notifications via email, SMS, or app when our system
                detects increased swarm risk in your hives.
              </p>
              <div className="mt-auto pt-4">
                <Link to="/instant-alerts" className="text-honey-600 hover:underline font-medium inline-flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={sectionRefs.howItWorks} id="howItWorks" className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className={`text-center mb-16 ${isVisible.howItWorks ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How BeePulse Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our simple three-step process helps you monitor and protect your bee colonies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className={`flex flex-col items-center text-center space-y-4 ${isVisible.howItWorks ? 'slide-in-left delay-100' : 'opacity-0'}`}>
              <div className="bg-honey-100 h-16 w-16 rounded-full flex items-center justify-center float-animation">
                <span className="font-bold text-honey-600 text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold">Install Sensors</h3>
              <p className="text-muted-foreground">
                Place our small, non-invasive acoustic sensors near your hives to collect
                data without disturbing the bees.
              </p>
            </div>
            
            <div className={`flex flex-col items-center text-center space-y-4 ${isVisible.howItWorks ? 'slide-in-bottom delay-300' : 'opacity-0'}`}>
              <div className="bg-honey-100 h-16 w-16 rounded-full flex items-center justify-center float-animation">
                <span className="font-bold text-honey-600 text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI constantly monitors acoustic patterns and environmental factors to
                detect early signs of swarming behavior.
              </p>
            </div>
            
            <div className={`flex flex-col items-center text-center space-y-4 ${isVisible.howItWorks ? 'slide-in-right delay-500' : 'opacity-0'}`}>
              <div className="bg-honey-100 h-16 w-16 rounded-full flex items-center justify-center float-animation">
                <span className="font-bold text-honey-600 text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold">Get Notified</h3>
              <p className="text-muted-foreground">
                Receive timely alerts when swarm risk is detected, giving you enough time
                to take preventive action and save your colony.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section ref={sectionRefs.testimonials} id="testimonials" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className={`text-center mb-16 ${isVisible.testimonials ? 'fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Trusted by Beekeepers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from beekeepers who have successfully prevented swarms with BeePulse
            </p>
          </div>
          
          <div className={`${isVisible.testimonials ? 'fade-in delay-300' : 'opacity-0'}`}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-card rounded-xl border shadow-sm h-full hover-3d">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                        <span className="font-bold text-honey-600">JD</span>
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">Professional Beekeeper</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "BeePulse has been a game-changer for my apiary. I've prevented at least 5 swarms
                      this season alone thanks to the early alerts. Well worth the investment."
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-card rounded-xl border shadow-sm h-full hover-3d">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                        <span className="font-bold text-honey-600">AS</span>
                      </div>
                      <div>
                        <p className="font-medium">Alice Smith</p>
                        <p className="text-sm text-muted-foreground">Hobby Beekeeper</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "As a new beekeeper, I was worried about missing the signs of swarming. BeePulse
                      has given me confidence by alerting me before any issues arise."
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-card rounded-xl border shadow-sm h-full hover-3d">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                        <span className="font-bold text-honey-600">MJ</span>
                      </div>
                      <div>
                        <p className="font-medium">Mark Johnson</p>
                        <p className="text-sm text-muted-foreground">Commercial Apiary Owner</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "We've integrated BeePulse across our 50+ hives. The data insights and swarm
                      predictions have improved our operations and reduced colony losses by 70%."
                    </p>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-card rounded-xl border shadow-sm h-full hover-3d">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                        <span className="font-bold text-honey-600">SL</span>
                      </div>
                      <div>
                        <p className="font-medium">Sarah Lee</p>
                        <p className="text-sm text-muted-foreground">Urban Beekeeper</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The accuracy of BeePulse is impressive. It detected pre-swarming behavior
                      in my rooftop hive a full week before I noticed any visible signs."
                    </p>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={sectionRefs.cta} id="cta" className="py-20 md:py-32 bg-honey-500 relative overflow-hidden">
        <div className="absolute inset-0 honeycomb-pattern opacity-10"></div>
        <div className={`absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 ${isVisible.cta ? 'float-animation' : ''}`}></div>
        <div className={`absolute -bottom-32 -right-32 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 ${isVisible.cta ? 'float-animation delay-500' : ''}`}></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className={`flex flex-col items-center text-center space-y-6 ${isVisible.cta ? 'fade-in' : 'opacity-0'}`}>
            <Leaf className="h-16 w-16 text-white float-rotate-animation" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Ready to protect your bee colonies?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl">
              Join beekeepers around the world who are using BeePulse to predict and prevent
              swarms before they happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="hover-3d" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-honey-600 hover-3d" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
