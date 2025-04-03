
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-md bg-honey-500 flex items-center justify-center">
              <span className="font-bold text-white">BP</span>
            </div>
            <span className="text-xl font-bold">BeePulse</span>
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
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <Link to="/settings">
                <Button variant="ghost" size="icon">
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
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button 
                      className="w-full text-left" 
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Logout
                    </button>
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
