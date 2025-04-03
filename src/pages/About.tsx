
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bee, Users, Award, LineChart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      <div className="container py-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            About BeePulse
          </h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing beekeeping through technology and artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At BeePulse, we're on a mission to empower beekeepers with cutting-edge technology 
              that helps them maintain healthier colonies, prevent swarming events, and maximize 
              honey production while reducing workload.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that by combining non-invasive monitoring with advanced AI analysis, 
              we can help solve many of the challenges facing modern beekeeping and contribute 
              to the health of global bee populations.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="BeePulse team working with beekeepers" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center mb-4">
                <Bee className="h-6 w-6 text-honey-600" />
              </div>
              <CardTitle>Founded By Beekeepers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                BeePulse was created by a team of experienced beekeepers and technology experts who 
                understood firsthand the challenges of modern apiculture. Our solutions are practical 
                because they're designed by people who work with bees every day.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-honey-600" />
              </div>
              <CardTitle>Award-Winning Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our acoustic monitoring and AI prediction technology has been recognized with 
                multiple agricultural innovation awards. We've partnered with leading research 
                institutions to continuously refine our methods and improve accuracy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-honey-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-honey-600" />
              </div>
              <CardTitle>Global Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                BeePulse is used by thousands of beekeepers across 28 countries, from hobbyists with 
                a few hives to commercial operations managing thousands of colonies. Our community 
                shares insights that help us continuously improve our predictions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-honey-50 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-honey-600">85%</p>
              <p className="text-lg font-medium">Swarm Prevention</p>
              <p className="text-sm text-muted-foreground">Success rate in preventing colony loss</p>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-honey-600">12,000+</p>
              <p className="text-lg font-medium">Monitored Hives</p>
              <p className="text-sm text-muted-foreground">Across diverse environments</p>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-honey-600">28</p>
              <p className="text-lg font-medium">Countries</p>
              <p className="text-sm text-muted-foreground">Where BeePulse is actively used</p>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-honey-600">31%</p>
              <p className="text-lg font-medium">Yield Increase</p>
              <p className="text-sm text-muted-foreground">Average honey production improvement</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Join Us in Protecting Bees</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your beekeeping practice with cutting-edge technology? 
            Join thousands of beekeepers already using BeePulse to maintain healthier, 
            more productive colonies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/signup">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/contact">
                Contact Our Team <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
