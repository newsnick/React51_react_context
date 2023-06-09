// With the context API you can specify certain pieces of data that will be available to all components nested inside the context with no need to pass this data through each component.
// It is essentially semi-global state that is available anywhere inside the context.

// contaxt alternative is redux. using redux you can also get proprty of one componet any other component.
// but redux is external library so you need to install that but for context you dont need to install any thing.
// redux is also apply to all project while context can apply only on required component set.

// There are two main steps to use the React context into the React application:
// Setup a context provider and define the data which you want to store.
// Use a context consumer whenever you need the data from the store

import React, { createContext } from 'react'
export const MyContext = createContext()
class MyProvider extends React.Component {
  render() {
    let valueToPass = 'Hello From Parent'
    return (
      <MyContext.Provider value={valueToPass}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider
