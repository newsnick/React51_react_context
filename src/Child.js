import React from 'react'
import SuperChild from './SuperChild.js'
class Child extends React.Component {
  render() {
    return (
      <div>
        <h3>Child Component</h3>
        <SuperChild />
      </div>
    )
  }
}

export default Child
