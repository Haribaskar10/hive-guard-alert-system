
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface AlertData {
  id: string;
  type: "swarm" | "temperature" | "humidity" | "info";
  title: string;
  description: string;
  timestamp: string;
  resolved: boolean;
}

const initialAlerts: AlertData[] = [
  {
    id: "1",
    type: "swarm",
    title: "High Swarm Risk Detected",
    description: "Hive #3 (Garden Meadow) is showing high swarm risk patterns",
    timestamp: "10 minutes ago",
    resolved: false,
  },
  {
    id: "2",
    type: "temperature",
    title: "Temperature Spike",
    description: "Hive #5 (Orchard East) temperature increased by 5°C",
    timestamp: "45 minutes ago",
    resolved: false,
  },
  {
    id: "3",
    type: "humidity",
    title: "Low Humidity Alert",
    description: "Hive #2 (Garden Corner) humidity below optimal level",
    timestamp: "1 hour ago",
    resolved: false,
  },
  {
    id: "4",
    type: "info",
    title: "Sensor Battery Low",
    description: "Hive #8 (Wildflower Field) sensor battery at 15%",
    timestamp: "3 hours ago",
    resolved: true,
  },
];

export function AlertsList() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const resolveAlert = (id: string) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, resolved: true } : alert
      )
    );
  };
  
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "swarm":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "temperature":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "humidity":
        return <AlertTriangle className="h-5 w-5 text-blue-500" />;
      case "info":
        return <AlertTriangle className="h-5 w-5 text-slate-500" />;
      default:
        return <AlertTriangle className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Recent Alerts</h3>
        <Button variant="ghost" size="sm" className="text-sm">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {alerts.filter(alert => !alert.resolved).length === 0 && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-green-500 mb-3" />
            <h4 className="text-lg font-medium">All Clear!</h4>
            <p className="text-sm text-muted-foreground max-w-xs">
              No active alerts at the moment. Your hives are operating within normal parameters.
            </p>
          </div>
        )}
        
        {alerts.filter(alert => !alert.resolved).map((alert) => (
          <Alert key={alert.id} className="flex justify-between items-start">
            <div className="flex gap-3">
              {getAlertIcon(alert.type)}
              <div>
                <AlertTitle>{alert.title}</AlertTitle>
                <AlertDescription className="text-xs">{alert.description}</AlertDescription>
                <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
              </div>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => resolveAlert(alert.id)}
            >
              Resolve
            </Button>
          </Alert>
        ))}
      </div>
    </div>
  );
}
