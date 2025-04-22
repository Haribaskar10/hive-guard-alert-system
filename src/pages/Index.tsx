import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { BarChart3, Radio, Shield } from "lucide-react";
import BeePulseLogo from "@/components/icons/BeePulseLogo";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 honeycomb-pattern">
        <div className="hero-gradient absolute inset-0"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-dirtyyellow-light/60 shadow hover-scale">
                {/* Remove 'animate-bounce' from BeeIcon */}
                <BeePulseLogo className="h-4 w-4 text-dirtyyellow-dark mr-2" />
                AI-powered bee swarm prediction
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary drop-shadow" style={{ textShadow: "0 1px 8px #ffd33840" }}>
                Save your hives with intelligent swarm prediction
              </h1>
              <p className="text-lg max-w-[600px] text-secondary">
                BeePulse helps beekeepers prevent colony losses by detecting swarm patterns 
                before they happen, using acoustic monitoring and AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="honey-gradient text-black shadow-lg hover-scale">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-dirtyyellow-dark text-secondary hover:bg-dirtyyellow-light hover:border-dirtyyellow-dark hover:text-black hover-scale">
                  <Link to="/dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/* remove animation classes */}
                <div className="absolute -left-4 -top-4 w-64 h-64 bg-dirtyyellow-dark rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
                <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
                <div className="relative rounded-2xl border bg-card glass p-6 shadow-2xl animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-secondary">Live Swarm Risk</h3>
                    <span className="text-xs text-secondary">Now</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-dirtyyellow-light/70 hover-scale shadow-sm transition-all duration-200">
                      <div>
                        <p className="font-medium text-secondary">Garden Hive</p>
                        <p className="text-xs text-secondary">Last update: 5 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-green-50/80 text-green-700 text-xs font-bold shadow">
                        Low Risk
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-dirtyyellow-light/70 hover-scale shadow-sm">
                      <div>
                        <p className="font-medium text-secondary">Orchard Hive</p>
                        <p className="text-xs text-secondary">Last update: 2 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-red-50/80 text-red-700 text-xs font-bold flex items-center gap-1 shadow">
                        <AlertTriangle className="h-3 w-3" />
                        High Risk
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg bg-dirtyyellow-light/70 hover-scale shadow-sm">
                      <div>
                        <p className="font-medium text-secondary">Meadow Hive</p>
                        <p className="text-xs text-secondary">Last update: 8 mins ago</p>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-yellow-50/90 text-yellow-800 text-xs font-bold shadow">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary">
              Smart Beekeeping Solutions
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Our AI-powered system monitors your hives 24/7 and alerts you before
              swarms happen, so you can take action and save your colonies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-dirtyyellow-light/70 glass rounded-xl border shadow-md animate-scale-in">
              <div className="h-12 w-12 rounded-full bg-dirtyyellow-light/90 flex items-center justify-center mb-5 animate-bounce">
                <Radio className="h-6 w-6 text-dirtyyellow-dark" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Acoustic Monitoring</h3>
              <p className="text-secondary mb-4">
                Advanced sensors detect changes in bee colony sounds that indicate
                potential swarming behavior before it happens.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/acoustic-monitoring"
                  className="story-link text-secondary hover:text-primary font-medium inline-flex items-center hover-scale"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 animate-slide-in-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col p-6 bg-dirtyyellow-light/70 glass rounded-xl border shadow-md animate-scale-in">
              <div className="h-12 w-12 rounded-full bg-dirtyyellow-light/90 flex items-center justify-center mb-5 animate-bounce animation-delay-300">
                <BarChart3 className="h-6 w-6 text-dirtyyellow-dark" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">AI Predictions</h3>
              <p className="text-secondary mb-4">
                Our machine learning algorithms analyze acoustic patterns and environmental
                data to predict swarm likelihood with high accuracy.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/ai-predictions"
                  className="story-link text-secondary hover:text-primary font-medium inline-flex items-center hover-scale"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 animate-slide-in-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col p-6 bg-dirtyyellow-light/70 glass rounded-xl border shadow-md animate-scale-in">
              <div className="h-12 w-12 rounded-full bg-dirtyyellow-light/90 flex items-center justify-center mb-5 animate-bounce animation-delay-700">
                <Shield className="h-6 w-6 text-dirtyyellow-dark" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Instant Alerts</h3>
              <p className="text-secondary mb-4">
                Receive real-time notifications via email, SMS, or app when our system
                detects increased swarm risk in your hives.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/instant-alerts"
                  className="story-link text-secondary hover:text-primary font-medium inline-flex items-center hover-scale"
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
              <div className="bg-dirtyyellow-light h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-dirtyyellow-dark text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold">Install Sensors</h3>
              <p className="text-muted-foreground">
                Place our small, non-invasive acoustic sensors near your hives to collect
                data without disturbing the bees.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-dirtyyellow-light h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-dirtyyellow-dark text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI constantly monitors acoustic patterns and environmental factors to
                detect early signs of swarming behavior.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-dirtyyellow-light h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-dirtyyellow-dark text-xl">3</span>
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
                <div className="mr-4 h-12 w-12 rounded-full bg-dirtyyellow-light flex items-center justify-center">
                  <span className="font-bold text-dirtyyellow-dark">JD</span>
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
                <div className="mr-4 h-12 w-12 rounded-full bg-dirtyyellow-light flex items-center justify-center">
                  <span className="font-bold text-dirtyyellow-dark">AS</span>
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
                <div className="mr-4 h-12 w-12 rounded-full bg-dirtyyellow-light flex items-center justify-center">
                  <span className="font-bold text-dirtyyellow-dark">MJ</span>
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
      <section className="py-20 md:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <BeePulseLogo className="h-16 w-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              Ready to protect your bee colonies?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Join beekeepers around the world who are using BeePulse to predict and prevent
              swarms before they happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
                asChild
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
