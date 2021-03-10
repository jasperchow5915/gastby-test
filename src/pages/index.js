import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { images } from "../components/image"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Banner from "../components/Banner"



const LandingPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner images={images} />
  </Layout>
)

export default LandingPage
