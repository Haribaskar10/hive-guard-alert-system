import { useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HiveDetailChart } from "@/components/dashboard/HiveDetailChart";
import { ArrowLeft, Bell, Edit, Trash2, Thermometer, Droplets, Activity } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const hiveData = {
  "hive-1": {
    id: "hive-1",
    name: "Garden Hive",
    location: "Backyard Garden",
    sensorId: "BP-SEN-1001",
    lastReading: "10 minutes ago",
    swarmRisk: "low",
    temperature: "34°C",
    humidity: "45%",
    activity: "Normal",
    installDate: "June 15, 2023",
    lastMaintenance: "August 25, 2023",
  },
  "hive-2": {
    id: "hive-2",
    name: "Orchard Hive",
    location: "East Orchard",
    sensorId: "BP-SEN-1002",
    lastReading: "5 minutes ago",
    swarmRisk: "high",
    temperature: "38°C",
    humidity: "40%",
    activity: "High",
    installDate: "April 10, 2023",
    lastMaintenance: "September 2, 2023",
  },
  "hive-3": {
    id: "hive-3",
    name: "Meadow Hive",
    location: "North Field",
    sensorId: "BP-SEN-1003",
    lastReading: "15 minutes ago",
    swarmRisk: "medium",
    temperature: "36°C",
    humidity: "42%",
    activity: "Elevated",
    installDate: "May 23, 2023",
    lastMaintenance: "September 8, 2023",
  },
  "hive-4": {
    id: "hive-4",
    name: "Rooftop Hive",
    location: "Chennai Building",
    sensorId: "BP-SEN-1004",
    lastReading: "15 minutes ago",
    swarmRisk: "low",
    temperature: "36°C",
    humidity: "42%",
    activity: "Normal",
    installDate: "May 25, 2023",
    lastMaintenance: "September 10, 2023",
  },
};

const getRiskClass = (risk: string) => {
  switch (risk) {
    case "low":
      return "risk-low";
    case "medium":
      return "risk-medium";
    case "high":
      return "risk-high";
    default:
      return "risk-low";
  }
};

export default function HiveDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Check if the hive exists in our data, if not use hive-1 as default
  const hive = id && hiveData[id] ? hiveData[id] : hiveData["hive-1"];
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link to="/hives">
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              </Link>
              <Badge 
                className={`${getRiskClass(hive.swarmRisk)}`}
              >
                {hive.swarmRisk.charAt(0).toUpperCase() + hive.swarmRisk.slice(1)} Risk
              </Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{hive.name}</h1>
            <p className="text-muted-foreground">
              {hive.location} • Sensor ID: {hive.sensorId}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Hive
            </Button>
            <Button variant="outline" className="text-destructive hover:bg-destructive/10">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Temperature</CardDescription>
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-red-500" />
                <CardTitle>{hive.temperature}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {hive.id === "hive-2" ? "4°C above normal" : "Within normal range"}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Humidity</CardDescription>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-blue-500" />
                <CardTitle>{hive.humidity}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {hive.id === "hive-3" ? "5% below optimal" : "Optimal level"}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Activity Level</CardDescription>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-honey-500" />
                <CardTitle>{hive.activity}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {hive.id === "hive-2" ? "Higher than usual" : "Typical for time of day"}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Last Updated</CardDescription>
              <CardTitle className="text-base">{hive.lastReading}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Next update in approximately 5 minutes
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <HiveDetailChart hiveId={hive.id} />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hive Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">Sensor ID</h4>
                <p className="text-sm text-muted-foreground">{hive.sensorId}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Installation Date</h4>
                <p className="text-sm text-muted-foreground">{hive.installDate}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Last Maintenance</h4>
                <p className="text-sm text-muted-foreground">{hive.lastMaintenance}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Location</h4>
                <p className="text-sm text-muted-foreground">{hive.location}</p>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  View Complete History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
