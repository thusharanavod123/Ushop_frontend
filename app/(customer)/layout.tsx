'use client'

import Footer from '@/components/customer/Footer';
import { usePathname } from 'next/navigation'

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  const pathname = usePathname();
  return (
    <>
    {children}
    <Footer/>
    </>
  )
}