
"use client"
import React,  from 'react'
import './css/globals.css'
import { Provider } from 'react-redux';
import { store } from './store/store'


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.png' type='image/svg+xml' />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#5d87ff" />
<script src="https://kit.fontawesome.com/018e90aa20.js" crossorigin="anonymous"></script>
      </head>
      <body className="">
        <Provider store={store}>
       
            {children}
            {/* <Toaster />        */}
        </Provider>

      </body>
    </html>
  )
}
