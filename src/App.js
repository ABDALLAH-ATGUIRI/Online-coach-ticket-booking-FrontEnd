import React, { Component } from "react";
import { Header, Footer, Container } from "./components/index";
import Login from "./auth/admin/Login";
class App extends Component {
  render() {
    return (
      <>
      <Login/>
        {/* <Header />
        <Container />
        <Footer /> */}
      </>
    );
  }
}

export default App;
