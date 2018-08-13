import React, { Component } from 'react';
import Title from './Title';
import CoursesList from './CoursesList'

export default class App extends Component {
  state = {
    courses: [
      "React",
      "React Native",
      "JavaScritp",
      "Node"
    ]
  }
  render() {
    return (
      <div>
        <Title title='Hello World'/>
        <CoursesList list={this.state.courses} />
      </div>
    )
  }
}
