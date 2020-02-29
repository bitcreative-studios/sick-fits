import React from "react"
import App, { Container } from "next/app"
import Page from "../components/Page"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Container>
  )
}

export default MyApp
