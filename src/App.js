import { Sidebar, Header, Footer, Container } from "./components/index";
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container></Container>
        <Sidebar />
        <Footer />
      </>
    );
  }
}

export default App;
