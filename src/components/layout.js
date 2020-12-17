/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import Header from "./header"
import "./layout.css"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      className="bg-white dark:bg-gray-800 dark:text-gray-100 bg-contain bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://github.com/r951236958/nextjs-tailwindcss/blob/main/public/assets/img/register_bg_2.png?raw=true")',
      }}
    >
      {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div
        style={{
          padding: `0 1.0875rem 1.45rem`,
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
        <footer
          className="bottom-0"
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
