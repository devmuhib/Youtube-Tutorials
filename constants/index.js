import { Blocks, LayoutDashboard, Logs } from "lucide-react";
import { GoGitBranch } from "react-icons/go";

export const sidebarNavLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: <Logs size={18} />,
  },
  {
    name: "Integrations",
    path: "/integrations",
    icon: <Blocks size={18} />,
  },
  {
    name: "Automation",
    path: "/automation",
    icon: <GoGitBranch size={18} />,
  },
];

export const pathInfo = {
  dashboard: {
    path: "Dashboard",
    subtitle: "Analytics of your stats",
  },
  orders: {
    path: "Orders",
    subtitle: "Database of wireo tenders",
  },

  integrations: {
    path: "Integrations",
    subtitle: "Connect Wiza to your favorite tools and gain their power",
  },
};

export const orderStatuses = [
  { value: "on-time", label: "On time" },
  { value: "delay", label: "Delay" },
  { value: "delivered", label: "Delivered" },
];

export const orderTableHead = [
  "Order Id",
  "Destination",
  "Cargo",
  "Price",
  "Delivery Date",
  "Status",
  "Actions",
];

export const orderStatusColor = {
  "on-time": "#3c51d7",
  delay: "#ef621c",
  delivered: "#30cf59",
};

export const connections = {
  slack: {
    icon: "/slack.png",
    name: "Slack",
    description:
      "Configure notifications and send messages to any Slack channel.",
    classes: "dark:bg-[#25201f]",
    isUpcoming: true,
  },
  discord: {
    icon: "/discord.png",
    name: "Discord",
    description:
      "Configure notifications and send messages to any Discord channel.",
    classes: "dark:bg-[#14113a]",
    isUpcoming: false,
  },
  sheets: {
    icon: "/sheets.png",
    name: "Google Sheets",
    description:
      "Configure notifications and send messages to any Discord channel.",
    classes: "dark:bg-[#102022]",
    isUpcoming: false,
  },
  forms: {
    icon: "/google-forms.png",
    name: "Google Forms",
    description:
      "Configure notifications and send messages to any Discord channel.",
    classes: "dark:bg-[#102022]",
    isUpcoming: false,
  },
  drive: {
    icon: "/google-drive.png",
    name: "Google Drive",
    description:
      "Configure notifications and send messages to any Discord channel.",
    classes: "dark:bg-[#102022]",
    isUpcoming: false,
  },
  trello: {
    icon: "/trello.png",
    name: "Trello",
    description:
      "Configure notifications and send messages to any Discord channel.",
    classes: "dark:bg-[#102022]",
    isUpcoming: true,
  },
};
