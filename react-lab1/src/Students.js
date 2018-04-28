import React, { Component } from 'react';
import Student from './Student';
class Students extends Component {
    students=[{name:"st1",department:"CSE",color:"red"},
  {name:"st2",department:"EEE",color:"green"},
  {name:"st3",department:"CE",color:"blue"}]
  render() {
    return (
    <ul class="student">
    <h3>Students</h3>
        {this.students.map((s)=>
        <Student stdObj={s} />
        )}
    </ul>
    );
  }
}

export default Students;
