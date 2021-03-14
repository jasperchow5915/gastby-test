import React from "react"
import * as Gatsby from "gatsby"
import { render } from "@testing-library/react"
import Layout from "../components/Layout"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      author: "Florian",
      description: "My description",
      title: "My Title",
    },
  },
}))

describe("<Layout />", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it("contains a header", () => {
    const { container } = render(
      <Layout>
        <h1>Hello</h1>
      </Layout>
    )
    expect(container.querySelector("header")).toBeInTheDocument()
  })
  it("renders children", () => {
    const text = `__Hello world__`
    const { getByText } = render(
      <Layout>
        <h1>{text}</h1>
      </Layout>
    )
    const child = getByText(text)
    expect(child).toBeInTheDocument()
  })
})
