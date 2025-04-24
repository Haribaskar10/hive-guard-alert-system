
import { AlertsList } from "@/components/dashboard/AlertsList";
import { HiveCard } from "@/components/dashboard/HiveCard";
import { StatusOverview } from "@/components/dashboard/StatusOverview";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AddHiveForm } from "@/components/dashboard/AddHiveForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

// Mock hive data
const mockHives = [
  {
    id: "hive-1",
    name: "Hive 1",
    location: "Backyard Garden",
    lastReading: "10 minutes ago",
    swarmRisk: "low" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 65 + Math.floor(Math.random() * 10),
    })),
  },
  {
    id: "hive-2",
    name: "Hive 2",
    location: "East Orchard",
    lastReading: "5 minutes ago",
    swarmRisk: "high" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 80 + Math.floor(Math.random() * 15),
    })),
  },
  {
    id: "hive-3",
    name: "Hive 3",
    location: "North Field",
    lastReading: "15 minutes ago",
    swarmRisk: "medium" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 70 + Math.floor(Math.random() * 12),
    })),
  },
  {
    id: "hive-4",
    name: "Hive 4",
    location: "West Forest Edge",
    lastReading: "25 minutes ago",
    swarmRisk: "low" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 68 + Math.floor(Math.random() * 8),
    })),
  },
  {
    id: "hive-5",
    name: "Hive 5",
    location: "Lavender Field",
    lastReading: "32 minutes ago",
    swarmRisk: "low" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 62 + Math.floor(Math.random() * 9),
    })),
  },
  {
    id: "hive-6",
    name: "Hive 6",
    location: "Urban Garden",
    lastReading: "18 minutes ago",
    swarmRisk: "medium" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 75 + Math.floor(Math.random() * 10),
    })),
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredHives = mockHives.filter((hive) =>
    hive.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hive.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your hives and track swarm predictions
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <AddHiveForm />
          </div>
        </div>
        
        <StatusOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Your Hives</h2>
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search hives..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {filteredHives.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredHives.map((hive) => (
                    <HiveCard key={hive.id} hive={hive} />
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">No hives match your search criteria</p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSearchTerm("")}
                  >
                    Clear search
                  </Button>
                </Card>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <AlertsList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
