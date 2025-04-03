
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const acousticData = [
  { time: "00:00", buzzing: 65, temperature: 32, humidity: 45 },
  { time: "03:00", buzzing: 68, temperature: 31, humidity: 47 },
  { time: "06:00", buzzing: 75, temperature: 30, humidity: 50 },
  { time: "09:00", buzzing: 85, temperature: 33, humidity: 48 },
  { time: "12:00", buzzing: 90, temperature: 36, humidity: 44 },
  { time: "15:00", buzzing: 88, temperature: 38, humidity: 42 },
  { time: "18:00", buzzing: 79, temperature: 35, humidity: 45 },
  { time: "21:00", buzzing: 70, temperature: 33, humidity: 47 },
];

const historicalData = [
  { month: "Jan", average: 62, alerts: 1 },
  { month: "Feb", average: 65, alerts: 0 },
  { month: "Mar", average: 68, alerts: 2 },
  { month: "Apr", average: 70, alerts: 1 },
  { month: "May", average: 72, alerts: 0 },
  { month: "Jun", average: 78, alerts: 3 },
  { month: "Jul", average: 82, alerts: 2 },
];

interface HiveDetailChartProps {
  hiveId: string;
}

export function HiveDetailChart({ hiveId }: HiveDetailChartProps) {
  const [timeRange, setTimeRange] = useState("24h");

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Hive Analytics</CardTitle>
            <CardDescription>Acoustic patterns and environmental data</CardDescription>
          </div>
          <Tabs defaultValue="acoustic" className="w-[300px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="acoustic">Acoustic</TabsTrigger>
              <TabsTrigger value="historical">Historical</TabsTrigger>
            </TabsList>
            <TabsContent value="acoustic">
              <div className="flex justify-end pt-2">
                <div className="inline-flex items-center rounded-md border px-3 py-1 text-sm">
                  <button
                    onClick={() => setTimeRange("24h")}
                    className={`px-2 ${timeRange === "24h" ? "text-honey-600 font-medium" : "text-muted-foreground"}`}
                  >
                    24h
                  </button>
                  <button
                    onClick={() => setTimeRange("7d")}
                    className={`px-2 ${timeRange === "7d" ? "text-honey-600 font-medium" : "text-muted-foreground"}`}
                  >
                    7d
                  </button>
                  <button
                    onClick={() => setTimeRange("30d")}
                    className={`px-2 ${timeRange === "30d" ? "text-honey-600 font-medium" : "text-muted-foreground"}`}
                  >
                    30d
                  </button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="historical">
              <div className="flex justify-end pt-2">
                <div className="inline-flex items-center rounded-md border px-3 py-1 text-sm">
                  <button className="px-2 text-honey-600 font-medium">
                    This Year
                  </button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Tabs defaultValue="acoustic">
          <TabsContent value="acoustic" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={acousticData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  name="Buzzing (dB)"
                  dataKey="buzzing"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  name="Temperature (°C)"
                  dataKey="temperature"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  name="Humidity (%)"
                  dataKey="humidity"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="historical" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={historicalData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="average"
                  name="Avg. Buzzing (dB)"
                  fill="#f59e0b"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  yAxisId="right"
                  dataKey="alerts"
                  name="Swarm Alerts"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
