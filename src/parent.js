import React from 'react'
import Child from './Child.js'
class Parent extends React.Component {
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <Child />
      </div>
    )
  }
}

export default Parent
