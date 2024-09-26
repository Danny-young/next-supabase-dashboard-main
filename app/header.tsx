import Link from 'next/link';
import React from 'react'
import { IoMdSchool } from "react-icons/io";
import ModeToggle from './dashboard/todo/components/ToggleDarkMode';

export default function Header() {
  return (
    <div className='px-6 py-3 flex justify-between items-center '>
        <Link href="/">
        <div className='flex items-center gap-3 '>
        
        <IoMdSchool size={40} color='' />
        <h1>AIT TA Suggestion System</h1>
        <ModeToggle />
        </div>
        </Link>
    
        <div className='flex gap-4 items-center'>
      
          <Link href="/dashboard" className='bg-blue-300 rounded-xl p-1.5 hover:text-white '><h1>Dashboard</h1></Link>
          <Link href="/about"><h1>About</h1></Link>
                
        </div>
    </div>
  )
}
