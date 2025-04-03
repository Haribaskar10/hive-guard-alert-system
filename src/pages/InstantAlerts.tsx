
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, PhoneOutgoing, Mail, Smartphone, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InstantAlerts() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Bell className="h-7 w-7" /> Instant Alerts
          </h1>
          <p className="text-muted-foreground">
            Receive time-critical notifications about your hives, wherever you are
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Alert Types
              </CardTitle>
              <CardDescription>
                Our system monitors your hives 24/7 and sends notifications for critical events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                      <Bell className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Swarm Alerts</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Get notified 2-5 days before a potential swarm event, giving you time to take
                        preventative action like splitting the colony or adding more space.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Highest Priority</span>
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                          <Clock className="h-3 w-3" /> 2-5 Days Notice
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-amber-600">
                        <path d="M15.5 9.5 12 6l-3.5 3.5" />
                        <rect width="3" height="3" x="6" y="15" rx=".5" />
                        <rect width="3" height="8" x="10.5" y="10" rx=".5" />
                        <rect width="3" height="14" x="15" y="4" rx=".5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Temperature Warnings</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Receive alerts when hive temperature falls outside the optimal range for
                        brood development (32-36°C/90-97°F), indicating potential problems with
                        colony strength or environmental conditions.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Medium Priority</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-honey-600">
                        <path d="m2 2 20 20M7.5 7.5a5 5 0 0 0 7 7" />
                        <path d="M18.33 15a9 9 0 0 0-12.78-12.78" />
                        <path d="M2 12h2a8 8 0 0 1 8 8v2" />
                        <path d="M20 12h2v2a8 8 0 0 1-8 8h-2" />
                        <path d="M12 12a5 5 0 0 0 8 8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Pest Detection</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Our acoustic analysis can detect the sounds of certain pests like hive beetles
                        or unusual bee behavior that indicates varroa mite infestation, allowing for
                        early intervention.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs bg-honey-100 text-honey-700 px-2 py-1 rounded-full">Medium Priority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Notification Methods</CardTitle>
              <CardDescription>Choose how you want to receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-honey-600" />
                  </div>
                  <p className="font-medium">Mobile App Push</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-honey-600" />
                  </div>
                  <p className="font-medium">Email Notifications</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <PhoneOutgoing className="h-5 w-5 text-honey-600" />
                  </div>
                  <p className="font-medium">SMS Alerts</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Alert Schedule</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Clock className="h-4 w-4 mr-2" /> Daily Schedule
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Bell className="h-4 w-4 mr-2" /> Priority Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
