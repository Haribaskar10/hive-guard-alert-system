
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Bell, Mail, Smartphone } from "lucide-react";

export function NotificationSettings() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    email: {
      swarmAlerts: true,
      temperatureAlerts: true,
      weeklyReports: true,
    },
    push: {
      swarmAlerts: true,
      temperatureAlerts: false,
      weeklyReports: false,
    },
    sms: {
      swarmAlerts: true,
      temperatureAlerts: false,
      weeklyReports: false,
    },
  });

  const updateSetting = (
    method: "email" | "push" | "sms",
    type: "swarmAlerts" | "temperatureAlerts" | "weeklyReports",
    value: boolean
  ) => {
    setSettings({
      ...settings,
      [method]: {
        ...settings[method],
        [type]: value,
      },
    });
  };

  const saveSettings = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Notification settings:", settings);
      setIsLoading(false);
      toast({
        title: "Settings saved",
        description: "Your notification preferences have been updated.",
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notification Settings
        </CardTitle>
        <CardDescription>
          Configure how and when you receive notifications
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <h3 className="font-medium">Email Notifications</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Swarm Alerts</p>
                <p className="text-xs text-muted-foreground">
                  Get notified when swarm risk is high
                </p>
              </div>
              <Switch
                checked={settings.email.swarmAlerts}
                onCheckedChange={(value) =>
                  updateSetting("email", "swarmAlerts", value)
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Temperature Alerts</p>
                <p className="text-xs text-muted-foreground">
                  Get notified of significant temperature changes
                </p>
              </div>
              <Switch
                checked={settings.email.temperatureAlerts}
                onCheckedChange={(value) =>
                  updateSetting("email", "temperatureAlerts", value)
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Weekly Reports</p>
                <p className="text-xs text-muted-foreground">
                  Receive weekly summary of hive activities
                </p>
              </div>
              <Switch
                checked={settings.email.weeklyReports}
                onCheckedChange={(value) =>
                  updateSetting("email", "weeklyReports", value)
                }
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <h3 className="font-medium">Push Notifications</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Swarm Alerts</p>
                <p className="text-xs text-muted-foreground">
                  Get notified when swarm risk is high
                </p>
              </div>
              <Switch
                checked={settings.push.swarmAlerts}
                onCheckedChange={(value) =>
                  updateSetting("push", "swarmAlerts", value)
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Temperature Alerts</p>
                <p className="text-xs text-muted-foreground">
                  Get notified of significant temperature changes
                </p>
              </div>
              <Switch
                checked={settings.push.temperatureAlerts}
                onCheckedChange={(value) =>
                  updateSetting("push", "temperatureAlerts", value)
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Weekly Reports</p>
                <p className="text-xs text-muted-foreground">
                  Receive weekly summary of hive activities
                </p>
              </div>
              <Switch
                checked={settings.push.weeklyReports}
                onCheckedChange={(value) =>
                  updateSetting("push", "weeklyReports", value)
                }
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            <h3 className="font-medium">SMS Notifications</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Swarm Alerts</p>
                <p className="text-xs text-muted-foreground">
                  Get notified when swarm risk is high
                </p>
              </div>
              <Switch
                checked={settings.sms.swarmAlerts}
                onCheckedChange={(value) =>
                  updateSetting("sms", "swarmAlerts", value)
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Temperature Alerts</p>
                <p className="text-xs text-muted-foreground">
                  Get notified of significant temperature changes
                </p>
              </div>
              <Switch
                checked={settings.sms.temperatureAlerts}
                onCheckedChange={(value) =>
                  updateSetting("sms", "temperatureAlerts", value)
                }
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Weekly Reports</p>
                <p className="text-xs text-muted-foreground">
                  Receive weekly summary of hive activities
                </p>
              </div>
              <Switch
                checked={settings.sms.weeklyReports}
                onCheckedChange={(value) =>
                  updateSetting("sms", "weeklyReports", value)
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={saveSettings} 
          disabled={isLoading} 
          className="w-full"
        >
          {isLoading ? "Saving..." : "Save Notification Preferences"}
        </Button>
      </CardFooter>
    </Card>
  );
}
