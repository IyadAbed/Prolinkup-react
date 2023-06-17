import React from 'react'
import { Link } from 'react-router-dom'
function NavDash() {
  return (
    <>
          <nav className="bg-gray-100 dark:bg-gray-700 sticky top-16 z-50">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link to='' href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Customer's</Link>
                </li>
                <li>
                    <Link to='' href="#" className="text-gray-900 dark:text-white hover:underline">Spechialist's</Link >
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}

export default NavDash