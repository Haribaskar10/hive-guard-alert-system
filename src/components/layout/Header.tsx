import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, Settings, User, Bee } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{ name?: string; email?: string } | null>(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    const storedUserData = localStorage.getItem("userData");
    
    setIsLoggedIn(loginStatus);
    if (storedUserData) {
      try {
        setUserData(JSON.parse(storedUserData));
      } catch (e) {
        console.error("Failed to parse user data");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
    
    toast({
      title: "Logged out",
      description: "You've been successfully logged out."
    });
    
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-md bg-honey-400 flex items-center justify-center shadow honey-gradient">
              <Bee
                className="h-7 w-7 text-yellow-600 animate-float"
                strokeWidth={2.3}
                style={{ filter: "drop-shadow(0 2px 4px #fbbf24cc)" }}
              />
              <span className="absolute -right-0.5 -bottom-0.5 text-xs font-bold text-honey-950">BP</span>
            </div>
            <span className="text-xl font-bold text-honey-800 drop-shadow-sm">BeePulse</span>
          </Link>
        </div>

        <nav className="flex-1 flex items-center justify-center">
          {isLoggedIn && (
            <div className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-sm font-medium hover:text-honey-600 transition-colors">
                Dashboard
              </Link>
              <Link to="/hives" className="text-sm font-medium hover:text-honey-600 transition-colors">
                Hives
              </Link>
              <Link to="/analytics" className="text-sm font-medium hover:text-honey-600 transition-colors">
                Analytics
              </Link>
              <Link to="/support" className="text-sm font-medium hover:text-honey-600 transition-colors">
                Support
              </Link>
            </div>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {!isLoggedIn ? (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative"
                aria-label="Notifications"
                title="Notifications"
              >
                <Link to="/notifications">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Link>
              </Button>
              
              <Link to="/settings">
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Settings"
                  title="Settings"
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {userData?.name || "My Account"}
                    {userData?.email && (
                      <p className="text-xs text-muted-foreground">{userData.email}</p>
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/support">Support</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
