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
import ScienceIcon from "@mui/icons-material/Science";
import MedicationIcon from "@mui/icons-material/Medication";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
    name: "Users",
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

  // ================= LAB =================
  {
    name: "Laboratory",
    icon: <ScienceIcon />,
    submenu: true,
    children: [
      { name: "Lab Dashboard" },
      { name: "Lab Reports" },
      { name: "Test Requests" },
      { name: "Sample Collection" },
    ],
  },

  // ================= PHARMACY =================
  {
    name: "Pharmacy",
    icon: <MedicationIcon />,
    submenu: true,
    children: [
      { name: "Medicine Inventory" },
      { name: "Prescriptions" },
      { name: "Suppliers" },
      { name: "Sales & Billing" },
    ],
  },

  // ================= NURSES =================
  {
    name: "Nurses",
    icon: <VaccinesIcon />,
    submenu: true,
    children: [
      { name: "Nurse Dashboard" },
      { name: "Patient Monitoring" },
      { name: "Ward Management" },
      { name: "Duty Schedule" },
    ],
  },

  // ================= ACCOUNTS =================
  {
    name: "Accounts",
    icon: <AccountBalanceWalletIcon />,
    submenu: true,
    children: [
      { name: "Invoices" },
      { name: "Billing" },
      { name: "Expenses" },
      { name: "Insurance Claims" },
    ],
  },

  {
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
    disabled: false,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const [openMenus, setOpenMenus] = useState({
    Laboratory: true,
    Pharmacy: false,
    Nurses: false,
    Accounts: false,
  });

  const toggleSubmenu = (menuName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

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
        shadow-2xl
        ${collapsed ? "w-20" : "w-72"}
      `}
      style={{ backgroundColor: "#14967f" }}
    >
      {/* ================= LOGO ================= */}
      <div className="flex items-center justify-between px-4 py-4 bg-yellow-200 text-black shrink-0 border-b border-black/5">
        
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
      <div
        className="
          flex-1
          overflow-y-auto
          px-3
          py-4
          space-y-1
          sidebar-scroll
        "
      >
        {menu.map((item, i) => {
          // ================= SUB MENUS =================
          if (item.submenu) {
            return (
              <div key={i} className="space-y-1">

                {/* MENU BUTTON */}
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    px-3
                    py-2.5
                    rounded-xl
                    hover:bg-white/10
                    transition
                    group
                  "
                >
                  <div className="flex items-center gap-3 min-w-0">

                    <div className="w-9 h-9 flex items-center justify-center rounded-lg group-hover:bg-white/10 transition">
                      {item.icon}
                    </div>

                    {!collapsed && (
                      <span className="text-sm font-medium truncate">
                        {item.name}
                      </span>
                    )}

                  </div>

                  {!collapsed && (
                    <div className="flex items-center gap-2">

                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
                        Soon
                      </span>

                      {openMenus[item.name] ? (
                        <KeyboardArrowDownIcon fontSize="small" />
                      ) : (
                        <KeyboardArrowRightIcon fontSize="small" />
                      )}

                    </div>
                  )}
                </button>

                {/* SUB MENU ITEMS */}
                {openMenus[item.name] && !collapsed && (
                  <div className="ml-5 pl-4 border-l border-white/10 space-y-1">

                    {item.children.map((child, idx) => (
                      <button
                        key={idx}
                        className="
                          w-full
                          text-left
                          px-3
                          py-2
                          rounded-lg
                          text-sm
                          text-white/80
                          hover:bg-white/10
                          hover:text-white
                          transition
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <span>{child.name}</span>

                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">
                          Upcoming
                        </span>
                      </button>
                    ))}

                  </div>
                )}
              </div>
            );
          }

          // ================= NORMAL MENU =================
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
                rounded-xl
                transition-all
                relative
                group
                ${
                  isActive
                    ? "bg-yellow-100 text-[#14967f] font-semibold shadow-md"
                    : "text-white/90 hover:bg-white/10"
                }
              `}
            >
              {/* ACTIVE INDICATOR */}
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#14967f] rounded-r-full" />
              )}

              {/* ICON */}
              <div
                className={`
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  transition
                  ${
                    isActive
                      ? "bg-[#14967f]/10"
                      : "group-hover:bg-white/10"
                  }
                `}
              >
                {item.icon}
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
      <div className="border-t border-white/10 p-3 shrink-0">

        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition cursor-pointer">

          <div className="w-10 h-10 bg-white text-[#14967f] flex items-center justify-center rounded-full font-bold shrink-0">
            A
          </div>

          {!collapsed && (
            <div className="text-sm min-w-0">
              <p className="font-medium truncate">
                Admin
              </p>

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