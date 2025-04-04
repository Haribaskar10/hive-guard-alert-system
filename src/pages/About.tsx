
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flower2, Activity, Shield, Users } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container py-12 space-y-16">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">About BeePulse</h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing beekeeping through smart technology and data-driven insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/placeholder.svg" 
              alt="BeePulse team working with beekeepers" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg">
              At BeePulse, we're on a mission to empower beekeepers with revolutionary technology
              that promotes healthier bee colonies and more sustainable apiculture practices.
            </p>
            <p>
              Founded in 2023 by a team of passionate technologists and experienced beekeepers,
              BeePulse was born from a simple observation: beekeeping hasn't significantly evolved
              in decades, while bees face unprecedented challenges from climate change, pesticides,
              and disease.
            </p>
            <p>
              We're dedicated to bridging this gap by creating accessible, non-invasive monitoring
              tools that provide real-time insights into hive health and behavior, allowing for
              proactive management and improved colony outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                <Flower2 className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="font-bold text-xl">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Our monitoring solutions are designed to be non-invasive and sustainable, with minimal
                environmental impact.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                <Activity className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="font-bold text-xl">Data-Driven</h3>
              <p className="text-muted-foreground">
                Advanced analytics turn complex hive data into actionable insights for better
                beekeeping decisions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="font-bold text-xl">Research-Backed</h3>
              <p className="text-muted-foreground">
                Our technology is developed in collaboration with leading apiologists and
                entomologists.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-honey-600" />
              </div>
              <h3 className="font-bold text-xl">Community-Focused</h3>
              <p className="text-muted-foreground">
                We believe in sharing knowledge and supporting both hobbyist and commercial
                beekeepers.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto">
            BeePulse brings together experts in ecology, electrical engineering, data science,
            and professional beekeeping to create truly revolutionary solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <img 
                src="/placeholder.svg" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto"
              />
              <div>
                <h3 className="font-bold">Dr. Emma Chen</h3>
                <p className="text-muted-foreground">Co-Founder & Chief Scientist</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <img 
                src="/placeholder.svg" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto"
              />
              <div>
                <h3 className="font-bold">Michael Patel</h3>
                <p className="text-muted-foreground">Co-Founder & CTO</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <img 
                src="/placeholder.svg" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto"
              />
              <div>
                <h3 className="font-bold">Sarah Johnson</h3>
                <p className="text-muted-foreground">Head of Product</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <img 
                src="/placeholder.svg" 
                alt="Team member" 
                className="w-24 h-24 rounded-full mx-auto"
              />
              <div>
                <h3 className="font-bold">James Wilson</h3>
                <p className="text-muted-foreground">Master Beekeeper</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Whether you're a commercial operation managing thousands of hives or a hobbyist with
            your first colony, BeePulse is designed to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
