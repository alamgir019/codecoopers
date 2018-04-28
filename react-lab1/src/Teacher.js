import React, { Component } from 'react';
class Teacher extends Component {
  render() {
    return (
    <li>{this.props.techObj.name} : { this.props.techObj.department}</li>
    );
  }
}

export default Teacher;
