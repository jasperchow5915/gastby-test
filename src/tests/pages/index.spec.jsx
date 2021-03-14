import React from "react"
import * as Gatsby from "gatsby"
import { render } from "@testing-library/react"
import LandingPage from "../../pages/index"

jest.mock("../../components/Layout", () => ({ children }) => <div>{children}</div>)

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
describe("<LandingPage />", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it("renders an H1 with the expected text", () => {
    const { getByText } = render(<LandingPage />)
    expect(
      getByText("two stunning new townhome releases launching early 2021")
    ).toBeInTheDocument()
  })
})
