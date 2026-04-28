
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  React.useEffect(()=>{
    console.log('props',props);
  })
  return (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
  )
}