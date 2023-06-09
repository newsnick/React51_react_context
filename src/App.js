import React from 'react'
import Parent from './Parent.js'
import MyProvider from './MyProvider'
class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <Parent />
      </MyProvider>
    )
  }
}
export default App
