"use client";
import React, { useEffect } from "react";
import "./css/globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Suspense } from "react";
import { useRouter } from "next/router";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  useEffect(()=>{
      const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    
         if(!ACCESS_TOKEN){
             router.push('/auth/login')
         }
  })
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#5d87ff" />
        <script
          src="https://kit.fontawesome.com/018e90aa20.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="">
        <Provider store={store}>
          <Suspense>{children}</Suspense>
          {/* <Toaster />        */}
        </Provider>
      </body>
    </html>
  );
}
