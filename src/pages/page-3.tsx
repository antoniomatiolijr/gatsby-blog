// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThreePage = (props: PageProps) => (
  <Layout>
    <SEO title="Page three" />
    <h1>Hi from the three page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThreePage
