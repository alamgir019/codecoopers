import React, { Component } from 'react';
import Course from './Course';
class Courses extends Component {
    courses=[{name:"Physics",code:"PH-001",color:"red"},
    {name:"Chemistry",code:"CH-001",color:"green"},
    {name:"Mathematics",code:"MATH-001",color:"blue"}]
    render() {
      return (
      <ul>
      <h3>Courses</h3>
          {this.courses.map((c)=>
          <Course courObj={c} />
          )}
      </ul>
      );
    }
  }

export default Courses;
