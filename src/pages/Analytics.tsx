
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer,
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Sample data
const lineChartData = [
  { name: "Jan", temperature: 32.4, humidity: 45, activity: 65 },
  { name: "Feb", temperature: 33.8, humidity: 47, activity: 68 },
  { name: "Mar", temperature: 34.5, humidity: 42, activity: 72 },
  { name: "Apr", temperature: 35.2, humidity: 40, activity: 75 },
  { name: "May", temperature: 36.8, humidity: 35, activity: 79 },
  { name: "Jun", temperature: 37.5, humidity: 30, activity: 87 },
  { name: "Jul", temperature: 37.2, humidity: 32, activity: 85 },
];

const barChartData = [
  { name: "Garden", healthy: 8, warning: 2, critical: 1 },
  { name: "Orchard", healthy: 5, warning: 1, critical: 0 },
  { name: "Meadow", healthy: 4, warning: 2, critical: 1 },
  { name: "Rooftop", healthy: 7, warning: 1, critical: 0 },
];

const pieChartData = [
  { name: "Low Risk", value: 65, color: "#4ade80" },
  { name: "Medium Risk", value: 25, color: "#facc15" },
  { name: "High Risk", value: 10, color: "#ef4444" },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("6months");
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">
              Analyze your hive performance and swarm prediction data
            </p>
          </div>
          
          <div className="w-full sm:w-auto">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="6months">Last 6 months</SelectItem>
                <SelectItem value="1year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Hive Temperature & Humidity</CardTitle>
              <CardDescription>Average readings across all hives</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#f59e0b" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="humidity" stroke="#0ea5e9" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Swarm Risk Distribution</CardTitle>
              <CardDescription>Current risk levels across all colonies</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Hive Health by Location</CardTitle>
            <CardDescription>Status breakdown for each apiary location</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="healthy" stackId="a" fill="#4ade80" />
                  <Bar dataKey="warning" stackId="a" fill="#facc15" />
                  <Bar dataKey="critical" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
