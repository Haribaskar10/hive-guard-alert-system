
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { NotificationIcon } from "./NotificationIcon";
import { NotificationTimeStamp } from "./NotificationTimeStamp";
import { Notification } from "./types";

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}

export function NotificationItem({ 
  notification, 
  onMarkAsRead, 
  onDelete 
}: NotificationItemProps) {
  return (
    <div 
      className={`p-4 border rounded-lg flex justify-between ${
        !notification.read ? "bg-muted/50" : ""
      }`}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 mt-1">
          <NotificationIcon type={notification.type} />
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
            <NotificationTimeStamp timestamp={notification.timestamp} />
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
                onClick={() => onMarkAsRead(notification.id)}
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
        onClick={() => onDelete(notification.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}
