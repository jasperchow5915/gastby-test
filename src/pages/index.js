import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { images } from "../components/image"
import Slider from "../components/Slider/Slider"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Banner = () => {
  return <div className=""></div>
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider slides={images} />
  </Layout>
)

export default IndexPage
