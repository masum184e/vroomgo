import Link from 'next/link'
import Image from 'next/image';

import "./globals.css";

import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";

export default function RootLayout({ children }) {
  const navItems = [{
    url: "/dashboard",
    title: "Dashboard",
    icon: <MdDashboard />
  }, {
    url: "/verification-request",
    title: "Verification Requests",
    icon: <RiVerifiedBadgeLine />
  }, {
    url: "/users",
    title: "Users",
    icon: <FaUsers />
  }, {
    url: "/reports",
    title: "Reports",
    icon: <MdReport />
  }
  ]
  return (
    <html lang="en">
      <body
      >
        <div className='flex'>
          <aside className='w-64 bg-white shadow-md h-screen flex flex-col p-4 relative'>
            <Link href="/" className="flex items-center justify-center mb-4">
              <Image src="/images/logo.png" alt="VroomGo" width={200} height={200} className='h-32 w-32' />
            </Link>
            <nav className='flex flex-col gap-2'>
              {
                navItems.map((nav, index) => (
                  <Link key={index} href={nav.url} className="px-2 text-gray-600 text-lg flex items-center gap-2" >{nav.icon} {nav.title}</Link>
                ))
              }
            </nav>
            <button type='button' className='bg-[#00d98b] text-white font-bold py-2 rounded-md cursor-pointer absolute bottom-0 mb-2 w-[87%]'>Sign Out</button>
          </aside>
          <main className='flex-1'>
            {children}
          </main>
        </div>
      </body>
    </html >
  );
}
