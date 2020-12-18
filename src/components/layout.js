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
import Footer from "./footer"

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

      <div className="container"
      >
        <main>{children}</main>
      </div>
      <Footer absolute />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
