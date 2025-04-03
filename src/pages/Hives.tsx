
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { HiveCard } from "@/components/dashboard/HiveCard";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AddHiveForm } from "@/components/dashboard/AddHiveForm";

// Sample hive data with the format expected by HiveCard
const sampleHives = [
  {
    id: "1",
    name: "Garden Hive",
    location: "Mumbai Garden",
    lastReading: "5 minutes ago",
    swarmRisk: "low" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 65 + Math.floor(Math.random() * 10),
    })),
  },
  {
    id: "2",
    name: "Orchard Hive",
    location: "Delhi Farms",
    lastReading: "2 minutes ago",
    swarmRisk: "high" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 80 + Math.floor(Math.random() * 15),
    })),
  },
  {
    id: "3",
    name: "Meadow Hive",
    location: "Kolkata Park",
    lastReading: "8 minutes ago",
    swarmRisk: "medium" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 70 + Math.floor(Math.random() * 12),
    })),
  },
  {
    id: "4",
    name: "Rooftop Hive",
    location: "Chennai Building",
    lastReading: "15 minutes ago",
    swarmRisk: "low" as const,
    activityData: Array.from({ length: 12 }, (_, i) => ({
      time: `${i}:00`,
      value: 68 + Math.floor(Math.random() * 8),
    })),
  },
];

export default function Hives() {
  const [hives, setHives] = useState(sampleHives);
  const [openDialog, setOpenDialog] = useState(false);

  const addHive = (newHiveData: any) => {
    // Create a new hive with the correct structure expected by HiveCard
    const newHive = {
      id: `${hives.length + 1}`,
      name: newHiveData.name,
      location: newHiveData.location,
      lastReading: "Just now",
      swarmRisk: "low" as const,
      activityData: Array.from({ length: 12 }, (_, i) => ({
        time: `${i}:00`,
        value: 65 + Math.floor(Math.random() * 10),
      })),
    };
    
    setHives([...hives, newHive]);
    setOpenDialog(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Your Hives</h1>
            <p className="text-muted-foreground">
              Monitor and manage all your beehives in one place
            </p>
          </div>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button className="shrink-0">
                <Plus className="h-4 w-4 mr-2" />
                Add New Hive
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <AddHiveForm onSubmit={addHive} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hives.map((hive) => (
            <HiveCard key={hive.id} hive={hive} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
