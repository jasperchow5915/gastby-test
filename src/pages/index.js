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
    <Banner images={images} bannerText="two stunning new townhome releases launching early 2021" />
  </Layout>
)

export default LandingPage
