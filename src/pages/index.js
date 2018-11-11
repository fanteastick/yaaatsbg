import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people what is Eilleen</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <a href="https://medium.freecodecamp.org/freecodecamp-is-hosting-a-free-hackathon-at-github-in-san-francisco-and-an-online-hackathon-too-2078088df278">This is the original tutorial</a>

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
