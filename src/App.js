import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";

class App extends Component {
    constructor() {
      super();
      
      this.state = {
        characters: []
      };
//Bind the (???) right here
// this.product = this.product.bind(this);
    }

    // componentDidMount() {
    //   //Hit the .get('/api/DATASTUFF?') endpoint and set the (STUFF) state to res.data
    //   axios
    //     .get("/api/???")
    //     .then(res => {
    //       this.setState({
    //         stuff : res.data
    //       });
    //     })
    //     .catch(console.log);
    // }


    // ((METHODS)) GO HERE






  render() {
    return (
      <div className="App">



        <Form />
        <Dashboard />
        


      </div>
    );
  }
}

export default App;
