
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NotificationsHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => void;
}

export function NotificationsHeader({ 
  unreadCount, 
  onMarkAllAsRead 
}: NotificationsHeaderProps) {
  return (
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
        <Button variant="outline" size="sm" onClick={onMarkAllAsRead}>
          Mark all as read
        </Button>
      )}
    </div>
  );
}
