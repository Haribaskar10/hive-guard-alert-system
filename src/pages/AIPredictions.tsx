
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, LineChart, AlertTriangle, BarChart3 } from "lucide-react";

export default function AIPredictions() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Brain className="h-7 w-7" /> AI Predictions
          </h1>
          <p className="text-muted-foreground">
            Advanced artificial intelligence to predict hive behaviors and potential issues
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5" />
                Our Prediction Technology
              </CardTitle>
              <CardDescription>
                How our AI models analyze multiple data streams to predict hive events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="AI Prediction illustration" 
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              
              <p>
                BeePulse uses a sophisticated machine learning system trained on millions of data points
                from thousands of hives across diverse environments. Our AI can identify patterns that
                humans might miss, providing early warnings for:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-honey-600" />
                  </div>
                  <div>
                    <p className="font-medium">Swarming Events</p>
                    <p className="text-sm text-muted-foreground">
                      Predict swarming 2-5 days before it occurs with 85-90% accuracy
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-honey-600">
                      <path d="m2 2 20 20M7.5 7.5a5 5 0 0 0 7 7" />
                      <path d="M18.33 15a9 9 0 0 0-12.78-12.78" />
                      <path d="M2 12h2a8 8 0 0 1 8 8v2" />
                      <path d="M20 12h2v2a8 8 0 0 1-8 8h-2" />
                      <path d="M12.5 14.5 12 18l-2 2 3-1 3 1-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Pest Invasions</p>
                    <p className="text-sm text-muted-foreground">
                      Detect early signs of varroa mites, hive beetles, and other pests
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-honey-600">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Health Issues</p>
                    <p className="text-sm text-muted-foreground">
                      Identify colony health problems weeks before they become critical
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-honey-600" />
                  </div>
                  <div>
                    <p className="font-medium">Productivity Forecasting</p>
                    <p className="text-sm text-muted-foreground">
                      Estimate honey production based on colony strength and environmental factors
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Inputs</CardTitle>
              <CardDescription>Multiple data streams feed our AI models</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-honey-600">
                      <path d="M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="font-medium">Acoustic Signatures</p>
                </div>
                <div className="mt-2">
                  <div className="h-2 bg-honey-100 rounded-full">
                    <div className="h-2 bg-honey-500 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-honey-600">
                      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                      <path d="M15 3v3a2 2 0 0 0 2 2h3" />
                      <path d="M3 15h3a2 2 0 0 1 2 2v3" />
                      <path d="M21 15h-3a2 2 0 0 0-2 2v3" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  <p className="font-medium">Temperature & Humidity</p>
                </div>
                <div className="mt-2">
                  <div className="h-2 bg-honey-100 rounded-full">
                    <div className="h-2 bg-honey-500 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-honey-600" />
                  </div>
                  <p className="font-medium">Historical Patterns</p>
                </div>
                <div className="mt-2">
                  <div className="h-2 bg-honey-100 rounded-full">
                    <div className="h-2 bg-honey-500 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-honey-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-honey-600">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </div>
                  <p className="font-medium">Weather Data</p>
                </div>
                <div className="mt-2">
                  <div className="h-2 bg-honey-100 rounded-full">
                    <div className="h-2 bg-honey-500 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
