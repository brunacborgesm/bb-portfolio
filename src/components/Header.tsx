'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from './Menu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex justify-between items-center px-4'>
      <Link href="/">
        <Image src="/bb-logo.png" alt="logo" width={50} height={50} />
      </Link>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center">
        <span
          className={`
            absolute h-1 w-8 bg-white rounded transition-all duration-200
            ${isOpen ? "rotate-45 top-5" : "top-3"}
          `}
          style={{ transitionTimingFunction: 'ease-in-out' }}
        />
        <span
          className={`
            absolute h-1 w-8 bg-white rounded transition-all duration-200
            ${isOpen ? "-rotate-45 top-5" : "top-7"}
          `}
          style={{ transitionTimingFunction: 'ease-in-out' }}
        />
      </button>
      <Menu opened={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
