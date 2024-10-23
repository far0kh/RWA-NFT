'use client'

import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className="antialiased w-full" id="Header">
      <nav className="fixed w-full top-0 left-0 px-2 bg-white border-gray-200 dark:bg-black/90 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <img src="/logo.webp" className="md:hidden h-12" alt="Tezuka Logo" />
            <img src="/logo-wide.webp" className="hidden md:block h-12" alt="Tezuka Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              type="button"
              href='https://waitlist.tezuka.xyz'
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
            >
              Join Waitlist
            </a>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              {open ? <RxCross1 size={40} /> : <FiMenu size={40} />}
            </button>
          </div>
          <div
            className={`items-center justify-between ${open ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-white bg-green-700 rounded md:bg-transparent md:text-green-500 md:dark:text-green-500 md:dark:hover:text-green-600" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#About" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#Blog" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
              </li>
              <li>
                <a href="#Roadmap" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Roadmap</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header