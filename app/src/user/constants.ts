import { LayoutDashboard, Video, Settings, Shield } from "lucide-react";
import { routes } from "wasp/client/router";

export const userMenuItems = [
  {
    name: "Video Generator",
    to: routes.DashboardRoute.to,
    icon: Video,
    isAdminOnly: false,
    isAuthRequired: true,
  },
  {
    name: "AI Scheduler (Demo App)",
    to: routes.DemoAppRoute.to,
    icon: LayoutDashboard,
    isAdminOnly: false,
    isAuthRequired: true,
  },
  {
    name: "Account Settings",
    to: routes.AccountRoute.to,
    icon: Settings,
    isAuthRequired: false,
    isAdminOnly: false,
  },
  {
    name: "Admin Dashboard",
    to: routes.AdminRoute.to,
    icon: Shield,
    isAuthRequired: false,
    isAdminOnly: true,
  },
] as const;
