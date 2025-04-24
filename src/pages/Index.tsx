import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { AlertTriangle, BarChart3, Radio, Shield } from "lucide-react";
import BeePulseLogo from "@/components/icons/BeePulseLogo";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-secondary/60">
                <BeePulseLogo className="h-4 w-4 mr-2" />
                AI-powered bee swarm prediction
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Save your hives with intelligent swarm prediction
              </h1>
              <p className="text-lg max-w-[600px] text-muted-foreground">
                BeePulse helps beekeepers prevent colony losses by detecting swarm patterns 
                before they happen, using acoustic monitoring and AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="honey-gradient text-white shadow-lg hover:opacity-90">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover:bg-secondary">
                  <Link to="/dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-2xl glass p-6 shadow-lg">
                  <img
                    src="/lovable-uploads/75b73f8a-f728-4f3a-8cb1-7396d14c7557.png"
                    alt="Bee on Honeycomb"
                    className="w-full h-64 object-cover rounded-lg"
                  />
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Smart Beekeeping Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered system monitors your hives 24/7 and alerts you before
              swarms happen, so you can take action and save your colonies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-secondary/5 rounded-xl border shadow-md">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-5">
                <Radio className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Acoustic Monitoring</h3>
              <p className="text-muted-foreground mb-4">
                Advanced sensors detect changes in bee colony sounds that indicate
                potential swarming behavior before it happens.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/acoustic-monitoring"
                  className="text-sm font-medium hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col p-6 bg-secondary/5 rounded-xl border shadow-md">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-5">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Predictions</h3>
              <p className="text-muted-foreground mb-4">
                Our machine learning algorithms analyze acoustic patterns and environmental
                data to predict swarm likelihood with high accuracy.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/ai-predictions"
                  className="text-sm font-medium hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col p-6 bg-secondary/5 rounded-xl border shadow-md">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center mb-5">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Alerts</h3>
              <p className="text-muted-foreground mb-4">
                Receive real-time notifications via email, SMS, or app when our system
                detects increased swarm risk in your hives.
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to="/instant-alerts"
                  className="text-sm font-medium hover:underline"
                >
                  Learn more
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
              <div className="bg-accent h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold">Install Sensors</h3>
              <p className="text-muted-foreground">
                Place our small, non-invasive acoustic sensors near your hives to collect
                data without disturbing the bees.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-accent h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI constantly monitors acoustic patterns and environmental factors to
                detect early signs of swarming behavior.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-accent h-16 w-16 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">3</span>
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
                <div className="mr-4 h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-bold">JD</span>
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
                <div className="mr-4 h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-bold">AS</span>
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
                <div className="mr-4 h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-bold">MJ</span>
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
      <section className="py-20 md:py-32 honeycomb-pattern">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <BeePulseLogo className="h-16 w-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to protect your bee colonies?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Join beekeepers around the world who are using BeePulse to predict and prevent
              swarms before they happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="honey-gradient text-white shadow-lg hover:opacity-90">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="hover:bg-secondary"
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
