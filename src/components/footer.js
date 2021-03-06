import { Link } from 'gatsby'
import React from "react"

const Footer = props => {
  return (
    <footer className="w-full bottom-0 bg-darkBlue-700 mt-2 pb-6">
      <div className="container mx-auto px-4">
        <hr className="mb-6 border-b-1 border-gray-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-white font-semibold py-1">
              Made with{" "}
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit"
                className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind Starter Kit{" "}
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
              <li>
                <Link
                  href="https://www.creative-tim.com"
                  className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Creative Tim
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/test"
                  className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                
                >
                  Test
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                  className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
