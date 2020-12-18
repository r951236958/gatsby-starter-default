import React from "react"
import HeroComponent from "../components/herocomponent"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import HeroComponent from "../components/herocomponent"

const Heros = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <HeroComponent />
    </Layout>
  )
}

export default Heros
