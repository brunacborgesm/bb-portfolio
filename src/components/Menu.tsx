import React from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Menu({ opened, onClose }: { opened: boolean, onClose: () => void }) {
  return (
    <>
      {/* Overlay escuro */}
      <div
        className={`
          fixed inset-0 z-40 bg-black transition-opacity duration-300
          ${opened ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose} // fecha o menu ao clicar fora
      />
      <nav
        className={`
          bg-blue-200 fixed top-0 right-0 w-1/2 h-full z-50 flex flex-col justify-center items-center p-12 shadow-2xl
          transition-all duration-300
          ${opened ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"}
        `}
        style={{ transitionProperty: 'opacity, transform' }}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Fechar menu"
        >
          {/* Barra de cima do X */}
          <span
            className="
              absolute h-1 w-8 bg-white rounded rotate-45
              transition-all duration-200
            "
            style={{ top: '1.25rem', transitionTimingFunction: 'ease-in-out' }}
          />
          {/* Barra de baixo do X */}
          <span
            className="
              absolute h-1 w-8 bg-white rounded -rotate-45
              transition-all duration-200
            "
            style={{ top: '1.25rem', transitionTimingFunction: 'ease-in-out' }}
          />
        </button>
        <ul className='flex flex-col gap-32 text-7xl text-center font-bold'>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/projects">Projetos</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
      </nav>
    </>
  )
}
