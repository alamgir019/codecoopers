import React, { Component } from 'react';
import Teacher from './Teacher'
class Teachers extends Component {
    teachers=[{name:"teacher1",department:"CSE",color:"red"},
    {name:"teacher2",department:"EEE",color:"green"},
    {name:"teacher3",department:"CE",color:"blue"}]
    render() {
      return (
      <ul>
      <h3>Teachers</h3>
          {this.teachers.map((t)=>
          <Teacher techObj={t} />
          )}
      </ul>
      );
    }
}

export default Teachers;
