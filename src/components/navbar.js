import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./navbar.module.css"

function Navbar({ siteTitle }) {
  const [isExpanded, toggleExpansion] = React.useState(false)
  return (
    <nav className="top-0 relative z-50 w-full flex items-center justify-between flex-wrap bg-darkcyan-700 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-5 w-5 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>

        <Link className="font-semibold text-sm tracking-tight" to={`/`}>
          {siteTitle}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-darkcyan-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block content-center ` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow items-center">
          <Link
            to={`/`}
            className="block lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Docs
          </Link>
          <Link
            to={`/page-2`}
            className="block lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Examples
          </Link>
          <Link
            to={`/page-3`}
            className="block lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
          >
            Blog
          </Link>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row lg:ml-auto md:w-1/3">
            <a
              href="#download"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
