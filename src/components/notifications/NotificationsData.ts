
import { Notification } from "./types";

// Sample notifications data
export const sampleNotifications: Notification[] = [
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
