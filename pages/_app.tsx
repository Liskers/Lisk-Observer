import * as React from "react";
import App, { Container } from "next/app";
import { Provider as ReakitProvider } from "reakit";
import theme from "reakit-theme-default";

class MyApp extends App<{}> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ReakitProvider theme={theme}>
          <Component {...pageProps} />
        </ReakitProvider>
      </Container>
    );
  }
}

export default MyApp;
