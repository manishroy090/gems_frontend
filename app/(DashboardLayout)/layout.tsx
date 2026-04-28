'use client'

import { useEffect } from 'react';
import Header from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar'
import { useRouter } from 'next/navigation'


export default function Layout({
  children,
}: Readonly<{children: React.ReactNode}>) {


  const router = useRouter()
  useEffect(() => {
    const AccessToken = localStorage.getItem('ACCESS_TOKEN');
    if (!AccessToken) {
      router.push('/auth/login')
    }
  },[]);

  
  return (
    <div className='flex w-full min-h-screen'>
      <div className='page-wrapper flex w-full'>
        {/* Header/sidebar */}
        <div className='xl:block hidden'>
          <Sidebar />
        </div>
        <div className='body-wrapper w-full bg-background'>
          {/* Top Header  */}
          <Header />
          {/* Body Content  */}
          <div className={`container mx-auto px-6 py-30`}>{children}</div>
        </div>
      </div>
     
    </div>
  )
}
