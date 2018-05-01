import React, { Component } from 'react';
import './App.css';
import CoffeeFilter from './CoffeeFilter';
import CommonComponent from './CommonComponent';
class App extends Component {
  constructor(){
    super();
    this.state={keyword:'',students:[],filteredStudents:[],
    teachers:[],filteredTeachers:[],
    courses:[],filteredCourses:[]
  
  };
    this.handleCoffeFilter=this.handleCoffeFilter.bind(this);
  }
  handleCoffeFilter(event)
  {
    this.setState({keyword:event.target.value});
    var studentResult=this.state.students.filter(x=>x.name.indexOf(event.target.value)!==-1);
    this.setState({filteredStudents:studentResult});

    var teacherResult=this.state.teachers.filter(x=>x.name.indexOf(event.target.value)!==-1);
    this.setState({filteredTeachers:teacherResult});

    var courseResult=this.state.courses.filter(x=>x.name.indexOf(event.target.value)!==-1);
    this.setState({filteredCourses:courseResult});
  }
  componentWillMount(){
    this.setState({students:[
      {objectID:1,name:"Idalia Kisling"},
      {objectID:2,name:"Retta Rosendahl"},
      {objectID:3,name:"Edna Andrada"},
      {objectID:4,name:"Nadine Rideout"},
      {objectID:5,name:"Tennie Boris"},
      {objectID:6,name:"Lucretia Cowboy"}
    ]});

    this.setState({filteredStudents:[
      {objectID:1,name:"Idalia Kisling"},
      {objectID:2,name:"Retta Rosendahl"},
      {objectID:3,name:"Edna Andrada"},
      {objectID:4,name:"Nadine Rideout"},
      {objectID:5,name:"Tennie Boris"},
      {objectID:6,name:"Lucretia Cowboy"}
    ]});
    this.setState({teachers:[
      {objectID:1,name:"Tashia Runkle"},
      {objectID:2,name:"Wiley Renfrew"},
      {objectID:3,name:"Blair Phinney"},
      {objectID:4,name:"Regine Franzen"},
      {objectID:5,name:"Cinthia Bardsley"},
      {objectID:6,name:"Soila Garriga"}
    ]});

    this.setState({filteredTeachers:[
      {objectID:1,name:"Tashia Runkle"},
      {objectID:2,name:"Wiley Renfrew"},
      {objectID:3,name:"Blair Phinney"},
      {objectID:4,name:"Regine Franzen"},
      {objectID:5,name:"Cinthia Bardsley"},
      {objectID:6,name:"Soila Garriga"}
    ]});
    this.setState({courses:[
      {objectID:1,name:"Leighann Calmes"},
      {objectID:2,name:"Birdie Poyer"},
      {objectID:3,name:"Jeana Rollo"},
      {objectID:4,name:"Berniece Redfearn"},
      {objectID:5,name:"Tiesha Klee"},
      {objectID:6,name:"Glennis Nevarez"},
      {objectID:7,name:"Aleen Hessler"},
      {objectID:8,name:"Luvenia Algarin"}
    ]});

    this.setState({filteredCourses:[
      {objectID:1,name:"Leighann Calmes"},
      {objectID:2,name:"Birdie Poyer"},
      {objectID:3,name:"Jeana Rollo"},
      {objectID:4,name:"Berniece Redfearn"},
      {objectID:5,name:"Tiesha Klee"},
      {objectID:6,name:"Glennis Nevarez"},
      {objectID:7,name:"Aleen Hessler"},
      {objectID:8,name:"Luvenia Algarin"}
    ]});
  }
  render() {
    return (
      <div className="App">
        <CoffeeFilter handleFilter={this.handleCoffeFilter} />
        <div className="content">
        <ul>
          <span className="searchResult"> Result Found: {this.state.filteredStudents.length} </span>
          <br/>
          <span>Students</span>
          {this.state.filteredStudents.map((s)=>
          <CommonComponent key={s.objectID} commonObj={s}/>
          )}
        </ul>
        <ul>
          <span className="searchResult"> Result Found: {this.state.filteredTeachers.length} </span>
          <br/>
          <span>Teachers</span>
          {this.state.filteredTeachers.map((t)=>
          <CommonComponent key={t.objectID} commonObj={t}/>
          )}
        </ul>
        <ul>
          <span className="searchResult"> Result Found: {this.state.filteredCourses.length} </span>
          <br/>
          <span>Courses</span>
          {this.state.filteredCourses.map((c)=>
          <CommonComponent key={c.objectID} commonObj={c}/>
          )}
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
