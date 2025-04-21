import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { AlertTriangle, BarChart3, Leaf, Radio, Shield } from "lucide-react";
import BeeIcon from "@/components/icons/BeeIcon";
import clsx from "clsx";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 honeycomb-pattern">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-honey-100/60 shadow hover-scale">
                <BeeIcon className="h-4 w-4 text-honey-500 animate-bounce mr-2" />
                AI-powered bee swarm prediction
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-honey-800 drop-shadow" style={{ textShadow: "0 1px 8px #fde68a40" }}>
                Save your hives with intelligent swarm prediction
              </h1>
              <p className="text-lg max-w-[600px] text-honey-950/80">
                BeePulse helps beekeepers prevent colony losses by detecting swarm patterns 
                before they happen, using acoustic monitoring and AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="honey-gradient text-white shadow-lg hover-scale">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-honey-400 text-honey-800 hover:bg-honey-100 hover:border-honey-500 hover:text-honey-900 hover-scale">
                  <Link to="/dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-4 -top-4 w-64 h-64 bg-honey-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
                <div className="relative rounded-2xl border bg-card glass p-6 shadow-2xl animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-honey-900">Live Swarm Risk</h3>
                    <span className="text-xs text-honey-700">Now</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-honey-50/60 hover-scale shadow-sm transition-all duration-200">
                      <div>
                        <p className="font-medium text-honey-800">Garden Hive</p>
                        <p className="text-xs text-honey-700">Last update: 5 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-green-50/80 text-green-700 text-xs font-bold shadow">
                        Low Risk
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-honey-50/60 hover-scale shadow-sm">
                      <div>
                        <p className="font-medium text-honey-800">Orchard Hive</p>
                        <p className="text-xs text-honey-700">Last update: 2 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-red-50/80 text-red-700 text-xs font-bold flex items-center gap-1 shadow">
                        <AlertTriangle className="h-3 w-3" />
                        High Risk
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-honey-50/60 hover-scale shadow-sm">
                      <div>
                        <p className="font-medium text-honey-800">Meadow Hive</p>
                        <p className="text-xs text-honey-700">Last update: 8 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-amber-50/80 text-amber-800 text-xs font-bold shadow">
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
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-honey-900">
              Smart Beekeeping Solutions
            </h2>
            <p className="text-lg text-honey-800 max-w-3xl mx-auto">
              Our AI-powered system monitors your hives 24/7 and alerts you before
              swarms happen, so you can take action and save your colonies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-honey-50/70 glass rounded-xl border shadow-md animate-scale-in">
              <div className="h-12 w-12 rounded-full bg-honey-200/90 flex items-center justify-center mb-5 animate-bounce">
                <Radio className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-honey-900">Acoustic Monitoring</h3>
              <p className="text-honey-800 mb-4">
                Advanced sensors detect changes in bee colony sounds that indicate
                potential swarming behavior before it happens.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/acoustic-monitoring"
                  className="story-link text-honey-700 hover:text-honey-900 font-medium inline-flex items-center hover-scale"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 animate-slide-in-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col p-6 bg-honey-50/70 glass rounded-xl border shadow-md animate-scale-in">
              <div className="h-12 w-12 rounded-full bg-honey-200/90 flex items-center justify-center mb-5 animate-bounce animation-delay-300">
                <BarChart3 className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-honey-900">AI Predictions</h3>
              <p className="text-honey-800 mb-4">
                Our machine learning algorithms analyze acoustic patterns and environmental
                data to predict swarm likelihood with high accuracy.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/ai-predictions"
                  className="story-link text-honey-700 hover:text-honey-900 font-medium inline-flex items-center hover-scale"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 animate-slide-in-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col p-6 bg-honey-50/70 glass rounded-xl border shadow-md animate-scale-in">
              <div className="h-12 w-12 rounded-full bg-honey-200/90 flex items-center justify-center mb-5 animate-bounce animation-delay-700">
                <Shield className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-honey-900">Instant Alerts</h3>
              <p className="text-honey-800 mb-4">
                Receive real-time notifications via email, SMS, or app when our system
                detects increased swarm risk in your hives.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/instant-alerts"
                  className="story-link text-honey-700 hover:text-honey-900 font-medium inline-flex items-center hover-scale"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 animate-slide-in-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-honey-50/80 glass shadow-2xl p-12 text-center relative overflow-hidden animate-fade-in">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none">
              <BeeIcon className="w-64 h-64 text-honey-400 rotate-[15deg]" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-honey-900 mb-2 z-10 relative">
              Real-world impact for your hives and for beekeeping communities
            </h2>
            <p className="text-lg md:text-xl text-honey-800 mb-10 z-10 relative">
              BeePulse users see up to <span className="font-semibold text-honey-700">70% fewer lost swarms</span> and stronger, more productive colonies. Our predictive alerts and analytics help both hobbyists and commercial apiaries thrive.<br />
              <span className="block mt-3 text-base text-honey-600">"Protect your bees, protect our future."</span>
            </p>
            <div className="mx-auto flex flex-col gap-2 items-center mt-8 z-10 relative">
              <video
                className="rounded-xl shadow-lg border-2 border-honey-100 w-full max-w-2xl bg-honey-100/60"
                controls
                poster="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=facearea&w=600&q=80"
                style={{ minHeight: "200px" }}
              >
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-xs text-honey-700 mt-1">
                (Add your own demo video above)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How BeePulse Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our simple three-step process helps you monitor and protect your bee colonies
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-honey-100 h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-honey-600 text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold">Install Sensors</h3>
              <p className="text-muted-foreground">
                Place our small, non-invasive acoustic sensors near your hives to collect
                data without disturbing the bees.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-honey-100 h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-honey-600 text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI constantly monitors acoustic patterns and environmental factors to
                detect early signs of swarming behavior.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-honey-100 h-16 w-16 rounded-full flex items-center justify-center">
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
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Trusted by Beekeepers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from beekeepers who have successfully prevented swarms with BeePulse
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-xl border shadow-sm">
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
            
            <div className="p-6 bg-card rounded-xl border shadow-sm">
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
            
            <div className="p-6 bg-card rounded-xl border shadow-sm">
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
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-honey-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <Leaf className="h-16 w-16 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Ready to protect your bee colonies?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl">
              Join beekeepers around the world who are using BeePulse to predict and prevent
              swarms before they happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-honey-600" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
