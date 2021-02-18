import "../styles/global.css"
import React from 'react';
import App from 'next/app';
import UserContext from "../components/UserContext";

class MyApp extends App {
  state = {
    test: "dasdasdasdas"
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider value={{ test: this.state.test }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}

export default MyApp;
