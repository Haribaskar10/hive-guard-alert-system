
import { Bell } from "lucide-react";
import { NotificationItem } from "./NotificationItem";
import { Notification } from "./types";

interface NotificationsListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
}

export function NotificationsList({ 
  notifications, 
  onMarkAsRead, 
  onDelete 
}: NotificationsListProps) {
  return (
    <div className="space-y-4">
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <NotificationItem 
            key={notification.id} 
            notification={notification}
            onMarkAsRead={onMarkAsRead}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className="text-center py-8">
          <Bell className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No notifications to display</p>
        </div>
      )}
    </div>
  );
}
