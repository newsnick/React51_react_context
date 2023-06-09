import React from 'react'
import { MyContext } from './MyProvider'
class SuperChild extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(valueFromParent) => (
          <div>
            <h5>Super Child Component</h5>
            <p>Value from Parent: {valueFromParent}</p>
          </div>
        )}
      </MyContext.Consumer>
    )
  }
}

export default SuperChild
