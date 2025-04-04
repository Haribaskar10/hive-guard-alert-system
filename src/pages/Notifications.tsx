
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Bell, Check, Info, X } from "lucide-react";
import { Link } from "react-router-dom";

// Sample notifications data
const sampleNotifications = [
  {
    id: "1",
    type: "alert",
    title: "High Swarm Risk Detected",
    message: "Orchard Hive shows signs of imminent swarming. Take action now.",
    timestamp: new Date(Date.now() - 30 * 60000),
    read: false,
    hiveId: "hive-2",
  },
  {
    id: "2",
    type: "warning",
    title: "Unusual Temperature Spike",
    message: "Meadow Hive temperature increased by 3°C in the last hour.",
    timestamp: new Date(Date.now() - 3 * 3600000),
    read: false,
    hiveId: "hive-3",
  },
  {
    id: "3",
    type: "info",
    title: "System Update Available",
    message: "A new version of BeePulse sensors is available for installation.",
    timestamp: new Date(Date.now() - 2 * 86400000),
    read: true,
  },
  {
    id: "4",
    type: "success",
    title: "New Hive Connected",
    message: "Rooftop Hive has been successfully connected to your account.",
    timestamp: new Date(Date.now() - 5 * 86400000),
    read: true,
    hiveId: "hive-4",
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [activeTab, setActiveTab] = useState("all");
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    return notification.type === activeTab;
  });
  
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  
  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "alert": return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "success": return <Check className="h-5 w-5 text-green-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };
  
  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.round(diffMs / 60000);
    const diffHours = Math.round(diffMs / 3600000);
    const diffDays = Math.round(diffMs / 86400000);
    
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    return `${diffDays} days ago`;
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold">Notifications</h1>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="bg-honey-500 text-white">
                {unreadCount} New
              </Badge>
            )}
          </div>
          
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notification Center
            </CardTitle>
            <CardDescription>
              Stay updated with alerts and information about your hives
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="alert">Alerts</TabsTrigger>
                <TabsTrigger value="warning">Warnings</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab}>
                <div className="space-y-4">
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 border rounded-lg flex justify-between ${
                          !notification.read ? "bg-muted/50" : ""
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{notification.title}</h3>
                              {!notification.read && (
                                <span className="h-2 w-2 bg-honey-500 rounded-full"></span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs text-muted-foreground">
                                {formatTimestamp(notification.timestamp)}
                              </span>
                              {notification.hiveId && (
                                <Button 
                                  variant="link" 
                                  size="sm" 
                                  className="p-0 h-auto text-xs text-honey-600"
                                  asChild
                                >
                                  <Link to={`/hives/${notification.hiveId}`}>View Hive</Link>
                                </Button>
                              )}
                              {!notification.read && (
                                <Button 
                                  variant="link" 
                                  size="sm" 
                                  className="p-0 h-auto text-xs"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  Mark as read
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 flex-shrink-0"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Bell className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground">No notifications to display</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
