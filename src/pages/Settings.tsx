
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { NotificationSettings } from "@/components/dashboard/NotificationSettings";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { BellRing, User, Shield, CreditCard } from "lucide-react";

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleProfileSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <BellRing className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Billing</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="apiary">Apiary Name</Label>
                  <Input id="apiary" defaultValue="Sunny Meadows Apiary" />
                </div>
              </div>
              
              <h3 className="text-lg font-medium pt-4">Address Information</h3>
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" defaultValue="123 Bee Lane" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="Honeyton" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" defaultValue="California" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zip">Postal Code</Label>
                  <Input id="zip" defaultValue="90210" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="United States" />
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  onClick={handleProfileSave} 
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <NotificationSettings />
          </TabsContent>
          
          <TabsContent value="security">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password</h3>
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                
                <div className="flex justify-end pt-2">
                  <Button>Update Password</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-medium">Authenticator App</h4>
                    <p className="text-sm text-muted-foreground">
                      Use an authenticator app to generate one-time codes
                    </p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-medium">SMS Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive a code on your phone to verify login attempts
                    </p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="billing">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Current Plan</h3>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-medium">Professional Plan</h4>
                    <p className="text-sm text-muted-foreground">
                      $29/month • Up to 25 hives • Premium support
                    </p>
                  </div>
                  <Button variant="outline">Upgrade</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="font-medium">•••• •••• •••• 4242</h4>
                    <p className="text-sm text-muted-foreground">
                      Expires 04/2025
                    </p>
                  </div>
                  <Button variant="outline">Update</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing History</h3>
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-medium">September 2023</p>
                      <p className="text-sm text-muted-foreground">Professional Plan</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p>$29.00</p>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-medium">August 2023</p>
                      <p className="text-sm text-muted-foreground">Professional Plan</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p>$29.00</p>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-medium">July 2023</p>
                      <p className="text-sm text-muted-foreground">Professional Plan</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p>$29.00</p>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
