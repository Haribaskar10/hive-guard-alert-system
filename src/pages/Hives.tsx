
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { HiveCard } from "@/components/dashboard/HiveCard";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AddHiveForm } from "@/components/dashboard/AddHiveForm";

// Sample hive data
const sampleHives = [
  {
    id: "1",
    name: "Garden Hive",
    location: "Bangalore Garden",
    status: "healthy",
    lastUpdate: new Date(Date.now() - 5 * 60000),
    riskLevel: "low",
    temperature: 35.2,
    humidity: 42,
    weight: 22.5,
  },
  {
    id: "2",
    name: "Orchard Hive",
    location: "Delhi Farms",
    status: "warning",
    lastUpdate: new Date(Date.now() - 2 * 60000),
    riskLevel: "high",
    temperature: 38.7,
    humidity: 28,
    weight: 18.3,
  },
  {
    id: "3",
    name: "Meadow Hive",
    location: "Mumbai Park",
    status: "attention",
    lastUpdate: new Date(Date.now() - 8 * 60000),
    riskLevel: "medium",
    temperature: 36.8,
    humidity: 35,
    weight: 20.1,
  },
  {
    id: "4",
    name: "Rooftop Hive",
    location: "Chennai Building",
    status: "healthy",
    lastUpdate: new Date(Date.now() - 15 * 60000),
    riskLevel: "low",
    temperature: 34.9,
    humidity: 45,
    weight: 23.7,
  },
];

export default function Hives() {
  const [hives, setHives] = useState(sampleHives);
  const [openDialog, setOpenDialog] = useState(false);

  const addHive = (newHive: any) => {
    setHives([...hives, { ...newHive, id: `${hives.length + 1}` }]);
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
