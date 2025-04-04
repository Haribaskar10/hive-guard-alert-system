
interface NotificationTimeStampProps {
  timestamp: Date;
}

export function NotificationTimeStamp({ timestamp }: NotificationTimeStampProps) {
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
    <span className="text-xs text-muted-foreground">
      {formatTimestamp(timestamp)}
    </span>
  );
}
