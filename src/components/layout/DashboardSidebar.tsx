
import {
  Bell,
  Home,
  BarChart3,
  Settings,
  HelpCircle,
  Box,
  Headphones,
  Brain,
  AlertTriangle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/" className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-honey-500 flex items-center justify-center">
            <span className="font-bold text-white">BP</span>
          </div>
          <span className="font-bold">BeePulse</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <div className="text-xs font-medium text-sidebar-foreground/70 px-2 mb-2">Main</div>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
              <Link to="/dashboard" className="flex items-center w-full">
                <Home className="h-4 w-4 mr-2" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/hives")}>
              <Link to="/hives" className="flex items-center w-full">
                <Box className="h-4 w-4 mr-2" />
                <span>Hives</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/analytics")}>
              <Link to="/analytics" className="flex items-center w-full">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span>Analytics</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <div className="text-xs font-medium text-sidebar-foreground/70 px-2 mb-2 mt-6">Features</div>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/acoustic-monitoring")}>
              <Link to="/acoustic-monitoring" className="flex items-center w-full">
                <Headphones className="h-4 w-4 mr-2" />
                <span>Acoustic Monitoring</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/ai-predictions")}>
              <Link to="/ai-predictions" className="flex items-center w-full">
                <Brain className="h-4 w-4 mr-2" />
                <span>AI Predictions</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/instant-alerts")}>
              <Link to="/instant-alerts" className="flex items-center w-full">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <span>Instant Alerts</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <div className="text-xs font-medium text-sidebar-foreground/70 px-2 mb-2 mt-6">Account</div>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/notifications")}>
              <Link to="/notifications" className="flex items-center w-full">
                <Bell className="h-4 w-4 mr-2" />
                <span>Notifications</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/settings")}>
              <Link to="/settings" className="flex items-center w-full">
                <Settings className="h-4 w-4 mr-2" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/support")}>
              <Link to="/support" className="flex items-center w-full">
                <HelpCircle className="h-4 w-4 mr-2" />
                <span>Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
