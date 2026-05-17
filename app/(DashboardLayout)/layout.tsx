"use client";

import { useEffect } from "react";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import { getMe } from "../services/Auth";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../store/features/Hoshpital/AuthSlice";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAuth = async () => {
      try {
        const { data } = await getMe();
        dispatch(setAuthUser(data?.user));
      } catch (err) {
        console.error("Auth fetch failed:", err);
      }
    };

    getAuth();
  }, [dispatch]);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <div className="hidden xl:block w-64 bg-white border-r">
        <Sidebar />
      </div>

      {/* ================= MAIN AREA ================= */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

      </div>

    </div>
  );
}