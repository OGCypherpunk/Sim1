import React, { Component } from "react";
import axios from "axios";
// import "./Components/Dashboard.css"
import Header from "../Header/Header"
import Product from "../Product/Product"


class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        unknownValueDashboard: []
      };
    
    }



    render() {
        const { unknownValueDashboard } = this.state;
        return (
          <div className="">
            Dashboard Component
            <div><Header /></div>
            <div><Product /></div>
          </div>
        );
      }

}
export default Dashboard;














