
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { Activity, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

interface HiveCardProps {
  hive: {
    id: string;
    name: string;
    location: string;
    lastReading: string;
    swarmRisk: "low" | "medium" | "high";
    activityData: Array<{ time: string; value: number }>;
  };
}

export function HiveCard({ hive }: HiveCardProps) {
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

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{hive.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{hive.location}</p>
          </div>
          <Badge 
            className={`${getRiskClass(hive.swarmRisk)} flex items-center gap-1`}
          >
            {hive.swarmRisk === "high" && <AlertTriangle className="h-3 w-3" />}
            {hive.swarmRisk.charAt(0).toUpperCase() + hive.swarmRisk.slice(1)} Risk
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="h-[80px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={hive.activityData}>
              <Tooltip 
                formatter={(value: number) => [`${value}db`, 'Activity']} 
                labelFormatter={(label) => `Time: ${label}`} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={
                  hive.swarmRisk === "high" ? "#ef4444" : 
                  hive.swarmRisk === "medium" ? "#f59e0b" : 
                  "#10b981"
                } 
                strokeWidth={2} 
                dot={false} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <Activity className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            Last reading: {hive.lastReading}
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button asChild className="w-full" variant="outline">
          <Link to={`/hives/${hive.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
