import React, { Component } from 'react';
class Course extends Component {
  render() {
    return (
    <li>{this.props.courObj.code} : { this.props.courObj.name}</li>
    );
  }
}

export default Course;
