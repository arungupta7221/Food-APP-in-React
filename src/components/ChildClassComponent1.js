import React from 'react'

class ChildClassComponent1 extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor' + this.props.name)
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        bio: 'Dummy Bio',
        avatar_url: 'Dummy Image',
      },
    }
  }
  async componentDidMount() {
    console.log('component Mount' + this.props.name)
    const data = await fetch('https://api.github.com/users/arungupta7221')
    const json = await data.json()
    console.log(json)
    this.setState({
      userInfo: json,
    })
  }

  componentDidUpdate() {
    console.log('component DidUpdate')
  }

  render() {
    console.log('render' + this.props.name)
    const { name, avatar_url, bio } = this.state.userInfo
    return (
      <>
        <h2>{name}</h2>
        <img src={avatar_url} />
        <h3>{bio}</h3>
      </>
    )
  }
}

export default ChildClassComponent1
