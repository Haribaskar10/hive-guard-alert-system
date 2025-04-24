import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Mic, AudioWaveform, Volume2, Speaker } from "lucide-react";

export default function AcousticMonitoring() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Headphones className="h-7 w-7" /> Acoustic Monitoring
          </h1>
          <p className="text-muted-foreground">
            Listen to your hives and understand bee behavior through advanced acoustic analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AudioWaveform className="h-5 w-5" />
                How Acoustic Monitoring Works
              </CardTitle>
              <CardDescription>
                Our sensor technology captures and analyzes bee sounds to detect important colony events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/9f4c4a39-04da-4fa8-8c3c-f7db96943b70.png" 
                    alt="BeePulse acoustic monitoring system" 
                    className="rounded-lg w-full h-64 object-cover"
                  />
                  <p>
                    BeePulse uses non-invasive microphones placed near the hive entrance to capture
                    the unique sounds produced by bee colonies. These sound patterns vary based on
                    colony activity, queen status, swarming preparations, and overall hive health.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">What We Can Detect</h3>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                        <Mic className="h-5 w-5 text-honey-600" />
                      </div>
                      <div>
                        <p className="font-medium">Pre-swarming Activity</p>
                        <p className="text-sm text-muted-foreground">
                          Detect the distinctive "piping" sounds queens make before swarming, 
                          giving you 2-5 days advance notice.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                        <Speaker className="h-5 w-5 text-honey-600" />
                      </div>
                      <div>
                        <p className="font-medium">Queen Status</p>
                        <p className="text-sm text-muted-foreground">
                          Monitor for sounds indicating queen loss or the emergence of a new queen,
                          critical for colony survival.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-honey-100 flex items-center justify-center">
                        <Volume2 className="h-5 w-5 text-honey-600" />
                      </div>
                      <div>
                        <p className="font-medium">Colony Strength</p>
                        <p className="text-sm text-muted-foreground">
                          Measure overall colony activity and strength by analyzing bee wing beat
                          frequencies and hive acoustic signatures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Signal Processing</CardTitle>
            <CardDescription>
              Our proprietary algorithms analyze sound patterns to identify critical events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 border rounded-lg text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-honey-100 flex items-center justify-center">
                  <AudioWaveform className="h-8 w-8 text-honey-600" />
                </div>
                <h3 className="font-medium">Sound Capture</h3>
                <p className="text-sm text-muted-foreground">
                  High-quality microphones capture bee sounds with minimal environmental interference
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 border rounded-lg text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-honey-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-honey-600">
                    <path d="M2 9h20M9 2v20M14 16l6-6M8 12l-6 6" />
                  </svg>
                </div>
                <h3 className="font-medium">Signal Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced algorithms filter noise and extract meaningful acoustic patterns
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 border rounded-lg text-center gap-4">
                <div className="h-16 w-16 rounded-full bg-honey-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-honey-600">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <h3 className="font-medium">Pattern Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Machine learning models identify specific colony behaviors and health indicators
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
