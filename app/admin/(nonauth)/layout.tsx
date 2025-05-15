'use client'

import NavBar from '@/components/admin/admin-layout/NavBar';
import { usePathname } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  const pathname = usePathname();
  return (
    <>
    <NavBar/>
    {children}
    </>
  )
}