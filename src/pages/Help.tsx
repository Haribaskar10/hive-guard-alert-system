
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, Mail, MessageSquare, Phone, BookOpen } from "lucide-react";

export default function Help() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <HelpCircle className="h-7 w-7" /> Help & Support
          </h1>
          <p className="text-muted-foreground">
            Find answers to common questions or contact our support team
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to the most common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How accurate is the swarm prediction?</AccordionTrigger>
                  <AccordionContent>
                    Our swarm prediction system has about 85-90% accuracy based on our testing.
                    It combines acoustic pattern analysis with environmental factors and historical
                    data to predict potential swarming events 2-5 days before they occur, giving
                    you enough time to take preventative action.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I set up the hive sensors?</AccordionTrigger>
                  <AccordionContent>
                    The BeePulse sensors are designed to be non-invasive and easy to install.
                    Simply place the acoustic sensor near the entrance of your hive (without
                    blocking bee traffic) and attach the temperature/humidity sensor to the
                    side or top of the hive box. Detailed installation instructions are included
                    in your sensor kit, or you can view our setup videos in the Resources section.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>What should I do when I get a swarm alert?</AccordionTrigger>
                  <AccordionContent>
                    When you receive a swarm alert, check your hive for signs of swarming
                    preparations, such as queen cells. You may need to split the colony,
                    add more space, or take other management actions depending on the situation.
                    Our alert notifications include recommended actions based on the specific
                    conditions detected.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How often do sensors need maintenance?</AccordionTrigger>
                  <AccordionContent>
                    BeePulse sensors are designed for minimal maintenance. We recommend
                    checking the battery levels monthly (visible in your dashboard) and
                    replacing batteries every 6-12 months depending on usage. Occasionally
                    wiping the sensors clean of propolis or debris will ensure optimal
                    performance.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I add more hives to my account?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can add as many hives to your BeePulse account as you need.
                    Standard accounts include monitoring for up to 5 hives. For additional
                    hives, you can upgrade to our Premium or Professional plans. Each new
                    hive requires its own sensor kit, which can be purchased separately.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>
                Get in touch with our support team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-honey-600" />
                </div>
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-sm text-muted-foreground">support@beepulse.in</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-honey-600" />
                </div>
                <div>
                  <p className="font-medium">Phone Support</p>
                  <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-honey-600" />
                </div>
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-sm text-muted-foreground">Available 9am-5pm IST</p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm font-medium mb-2">Send us a message</p>
                <div className="space-y-3">
                  <Input placeholder="Subject" />
                  <textarea 
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help you?"
                  />
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Resources
            </CardTitle>
            <CardDescription>
              Helpful guides and documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-honey-600" />
                </div>
                <div className="text-center">
                  <p className="font-medium">User Manual</p>
                  <p className="text-xs text-muted-foreground">Complete guide to BeePulse</p>
                </div>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-honey-600">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-medium">Video Tutorials</p>
                  <p className="text-xs text-muted-foreground">Step-by-step installation</p>
                </div>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-honey-600">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-medium">API Documentation</p>
                  <p className="text-xs text-muted-foreground">For developers</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
