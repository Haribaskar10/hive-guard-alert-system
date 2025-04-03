
import {
  Bell,
  Home,
  BarChart3,
  Settings,
  HelpCircle,
  Box,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuLabel,
  SidebarMenuLink,
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
          <div className="w-8 h-8 rounded-md bg-honey-500 flex items-center justify-center">
            <span className="font-bold text-white">BP</span>
          </div>
          <span className="font-bold">BeePulse</span>
        </Link>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuLabel>Main</SidebarMenuLabel>
          <SidebarMenuItem active={isActive("/dashboard")}>
            <SidebarMenuLink asChild>
              <Link to="/dashboard">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuLink>
          </SidebarMenuItem>
          
          <SidebarMenuItem active={isActive("/hives")}>
            <SidebarMenuLink asChild>
              <Link to="/hives">
                <Box className="h-4 w-4" />
                <span>Hives</span>
              </Link>
            </SidebarMenuLink>
          </SidebarMenuItem>
          
          <SidebarMenuItem active={isActive("/analytics")}>
            <SidebarMenuLink asChild>
              <Link to="/analytics">
                <BarChart3 className="h-4 w-4" />
                <span>Analytics</span>
              </Link>
            </SidebarMenuLink>
          </SidebarMenuItem>
          
          <SidebarMenuLabel>Account</SidebarMenuLabel>
          <SidebarMenuItem active={isActive("/notifications")}>
            <SidebarMenuLink asChild>
              <Link to="/notifications">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </Link>
            </SidebarMenuLink>
          </SidebarMenuItem>
          
          <SidebarMenuItem active={isActive("/settings")}>
            <SidebarMenuLink asChild>
              <Link to="/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuLink asChild>
              <Link to="/help">
                <HelpCircle className="h-4 w-4" />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
