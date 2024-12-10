import { NAVIGATIONS, SOCIALS } from '@/constant'
import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {NAVIGATIONS.map((item) => (
            <div key={item.label} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-5 flex justify-center space-x-6">
          {SOCIALS.map((item) => (
            <Link
              target='_blank'
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-800"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon && (
                <item.icon className="h-5 w-5" aria-hidden="true" />
              )}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Gaza Soup Kitchen. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer