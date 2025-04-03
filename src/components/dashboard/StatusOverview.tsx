
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgePlus, AlertTriangle, ThermometerSun, Maximize2 } from "lucide-react";

export function StatusOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Total Hives</CardDescription>
          <CardTitle className="text-3xl">12</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <BadgePlus className="h-4 w-4" />
            <span>3 added this month</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Swarm Alerts</CardDescription>
          <CardTitle className="text-3xl text-amber-500">2</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <AlertTriangle className="h-4 w-4" />
            <span>Attention required</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Avg. Temperature</CardDescription>
          <CardTitle className="text-3xl">34°C</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ThermometerSun className="h-4 w-4" />
            <span>2°C higher than usual</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardDescription>Hive Capacity</CardDescription>
          <CardTitle className="text-3xl">85%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Maximize2 className="h-4 w-4" />
            <span>At optimal capacity</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
