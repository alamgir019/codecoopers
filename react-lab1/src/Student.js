import React, { Component } from 'react';
class Student extends Component {
  constructor()
     {
         super();
     }
  render() {
    return (
    <li>{this.props.stdObj.name} : { this.props.stdObj.department}</li>
    );
  }
}

export default Student;
