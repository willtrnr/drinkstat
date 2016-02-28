import React, { PropTypes } from 'react'
import LoginView from 'views/LoginView/LoginView'

export default class Authentication extends React.Component<void, Props, void> {
  static propTypes = {
    children: PropTypes.element
  };

  static childContextTypes = {
    user: PropTypes.object
  };

  constructor (props) {
    super(props)
    this.state = { user: null }
  }

  handleSetUser = (user) => this.setState({ user })

  render () {
    return this.state.user ? this.props.children : <LoginView setUser={this.handleSetUser} />
  }

  getChildContext () {
    return { user: this.state.user }
  }
}