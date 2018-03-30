import React, { Component } from "react";
import axios from "axios";
// import "./Components/Form.css"


class Form extends Component {
    constructor() {
      super();
      this.state = {
        unknownValueForm: []
      };
    
    }



    render() {
        const { unknownValueForm } = this.state;
        return (
          <div className="">
            Form Component
          </div>
        );
      }

}
export default Form;