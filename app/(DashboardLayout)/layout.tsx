"use client";

import { useEffect } from "react";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import { getMe } from "../services/Auth";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../store/features/Hoshpital/AuthSlice";
import AIBotUI from "../components/medinexus/AIBotUI";
import { useRouter } from 'next/navigation'
export default function Layout({ children }: { children: React.ReactNode }) {
   const dispatch = useDispatch();

   const router = useRouter();

   useEffect(()=>{
    const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

    if (!ACCESS_TOKEN) {
      router.push("/auth/login");
    }

   },[])

  

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
    <div className="h-screen w-screen overflow-hidden bg-gray-100">
      {/* ================= SIDEBAR ================= */}
      <aside className="fixed left-0 top-0 z-40 hidden xl:block">
        <Sidebar />
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="xl:ml-72 h-screen flex flex-col overflow-hidden">
        {/* ================= HEADER ================= */}
        <header className="shrink-0 bg-white border-b z-30">
          <Header />
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
          <AIBotUI />
        </main>
      </div>
    </div>
  );
}
