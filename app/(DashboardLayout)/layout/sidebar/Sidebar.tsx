"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

import FullLogo from "../shared/logo/FullLogo";

const menu = [
  {
    name: "Home",
    icon: <HomeIcon />,
    path: "/underconstruction",
    disabled: true,
  },
  {
    name: "Roles",
    icon: <PeopleIcon />,
    path: "/superAdmin/usersmanagement/roles",
  },
  {
    name: "Staff",
    icon: <PeopleIcon />,
    path: "/superAdmin/usersmanagement/users",
  },
  {
    name: "Doctors",
    icon: <LocalHospitalIcon />,
    path: "/superAdmin/doctormanagement/doctors",
  },
  {
    name: "Patients",
    icon: <PeopleIcon />,
    path: "/superAdmin/patientmanagement/Patients",
  },
  {
    name: "Appointments",
    icon: <CalendarMonthIcon />,
    path: "/underconstruction",
    disabled: true,
  },
  {
    name: "Transactions",
    icon: <PaymentsIcon />,
    path: "/underconstruction",
    disabled: true,
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/underconstruction",
    disabled: true,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`
        h-screen
        flex
        flex-col
        transition-all
        duration-300
        text-white
        overflow-hidden
        ${collapsed ? "w-20" : "w-64"}
      `}
      style={{ backgroundColor: "#14967f" }}
    >
      {/* ================= LOGO SECTION ================= */}
      <div className="flex items-center justify-between px-4 py-4 bg-yellow-200 text-black shrink-0">
        {!collapsed && (
          <div className="text-lg font-bold">
            <FullLogo />
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-black/10 transition"
        >
          <MenuIcon />
        </button>
      </div>

      {/* ================= MENU ================= */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {menu.map((item, i) => {
          const isUnderConstruction =
            item.path === "/underconstruction";

          const isActive =
            !isUnderConstruction &&
            (pathname === item.path ||
              pathname.startsWith(item.path + "/"));

          return (
            <Link
              key={i}
              href={item.disabled ? "#" : item.path}
              onClick={(e) => {
                if (item.disabled) e.preventDefault();
              }}
              className={`
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-lg
                transition-all
                relative
                group
                ${
                  isActive
                    ? "bg-yellow-100 text-[#14967f] font-semibold shadow-sm"
                    : "text-white/90 hover:bg-white/10"
                }
              `}
            >
              {/* ACTIVE LEFT BAR */}
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-1 bg-yellow-100 rounded-r-full" />
              )}

              {/* ICON */}
              <div
                className={`
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-md
                  transition
                  ${
                    isActive
                      ? "bg-[#14967f]/10"
                      : "group-hover:bg-white/10"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
              </div>

              {/* LABEL */}
              {!collapsed && (
                <div className="flex items-center justify-between w-full min-w-0">
                  <span className="text-sm truncate">
                    {item.name}
                  </span>

                  {item.disabled && (
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t border-white/20 p-3 shrink-0">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition cursor-pointer">
          <div className="w-10 h-10 bg-white text-[#14967f] flex items-center justify-center rounded-full font-bold shrink-0">
            A
          </div>

          {!collapsed && (
            <div className="text-sm min-w-0">
              <p className="font-medium truncate">Admin</p>
              <p className="text-xs text-white/70 truncate">
                admin@medicare.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;