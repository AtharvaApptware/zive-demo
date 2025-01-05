import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PieChartIcon from "@mui/icons-material/PieChartOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenterOutlined";
import AssessmentSharpIcon from "@mui/icons-material/AssignmentIndOutlined";
import StackedLineChartSharpIcon from "@mui/icons-material/StackedLineChartSharp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Pic from "@assets/logo.svg";

const Sidebar = () => {
  const location = useLocation(); // Get current location (URL)

  const menuItems = [
    { name: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    {
      name: "Authorized Shares",
      icon: <AccountBalanceWalletOutlinedIcon />,
      route: "/authorized-shares",
    },
    { name: "Cap Table", icon: <PieChartIcon />, route: "/cap-table" },
    {
      name: "Portfolio View",
      icon: <BusinessCenterIcon />,
      route: "/portfolio-view",
    },
    { name: "Reports", icon: <AssessmentSharpIcon />, route: "/reports" },
    {
      name: "Simulations",
      icon: <StackedLineChartSharpIcon />,
      route: "/simulations",
    },
    { name: "409A", icon: <MonetizationOnOutlinedIcon />, route: "/409a" },
    {
      name: "Data Room",
      icon: <CreateNewFolderOutlinedIcon />,
      route: "/data-room",
    },
    {
      name: "Audit Log",
      icon: <ContentPasteSearchOutlinedIcon />,
      route: "/audit-log",
    },
    {
      name: "Transfer Agent",
      icon: <TaskAltOutlinedIcon />,
      route: "/transfer-agent",
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: null,
      icon: null,
      route: null,
    },
    {
      name: "User Management",
      icon: <PersonOutlinedIcon />,
      route: "/user-management",
    },

    {
      name: "Settings",
      icon: <SettingsOutlinedIcon />,
      route: "/settings",
    },
  ];

  return (
    <div className="flex flex-col w-64 h-[calc(100vh)] overflow-y-auto bg-gray-100 border-r">
      <div className="flex items-center px-6 py-3">
        <div className="flex items-center space-x-2 w-full">
          <img src={Pic} alt="icon" className="h-8 w-8 rounded-full" />
          <p className="font-semibold text-sm text-[#0A3C5F] whitespace-nowrap">
            Contra Venture Fund I
          </p>
          <KeyboardArrowDownOutlinedIcon className="text-gray-500" />
        </div>
      </div>

      <div className="mt-6">
        {menuItems.map((item, index) => (
          <Link to={item.route!} key={index}>
            <div
              className={`flex items-center px-6 py-3 ${
                location.pathname === item.route
                  ? " text-[#107ECB]"
                  : "text-gray-600 hover:bg-gray-200"
              } cursor-pointer`}
            >
              <div className="mr-3">{item.icon}</div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
