import { default as Sidebar } from "./Sidebar/Sidebar";
import React, { Component } from "react";
import Router from "./router";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="flex">
          <Sidebar />
          <div className="p-5">
            <Router />
          </div>
        </div>
      </>
    );
  }
}
 