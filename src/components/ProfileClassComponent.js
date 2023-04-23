// this component is only for learning class based component

// flow of this component => constructor render -> component render -> componentDidMount render
import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    // method to create state varibale
    this.state = {
      count: 0,
      loading: false,
    }
  }
  componentDidMount() {
    // here we have to make API Calls because it render after consturctor and component render
    console.log('componentMount')
  }
  render() {
    console.log('render')
    return (
      <>
        <h2>this is class based component</h2>
        {/* method to use props on screen */}
        <h3>Name:{this.props.name}</h3>
        {/* method to use count or state on screen */}
        <h3>{this.state.count}</h3>

        <button
          onClick={() => {
            this.setState({
              count: 1,
              loading: true,
            })
          }}
        >
          Click me
        </button>
      </>
    )
  }
}

export default Profile
