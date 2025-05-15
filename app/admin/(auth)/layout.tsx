'use client'

import { usePathname } from 'next/navigation'
import styles from './styles.module.css';

export default function AdminCommonLayout({
  children,
}: {
  children: React.ReactNode;

}) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className={pathname=='/admin/register'?"bg-white container mx-auto p-8 w-full":"bg-white max-w-md p-8 w-full"}>
          <div className={pathname=='/admin/register'?styles.img_container_reg:styles.img_container+' mb-8'}>
            <img src="/images/logo.png" alt="Image" className="w-full" />
          </div>
          {/* <p>{pathname}</p> */}
        {children}
      </div>
    </div>
  )
}