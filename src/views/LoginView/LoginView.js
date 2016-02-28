/* @flow */
import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/lib/circular-progress'
import LocalDrink from 'material-ui/lib/svg-icons/maps/local-drink'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field'
import View from 'react-flexbox'

import BgImage from './bg.jpg'

type Props = {
  setUser: Function
};

export default class LoginView extends React.Component<void, Props, void> {
  static propTypes = {
    setUser: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props)
    this.state = { loading: false }
  }

  handleLogin = () => {
    if (this.state.email && this.state.password) {
      this.setState({ ...this.state, loading: true })
      setTimeout(() => {
        this.setState({ ...this.state, loading: false })
        this.props.setUser({ id: 42, firstname: 'John', lastname: 'Doe', email: this.state.email })
      }, 2000)
    }
  }

  handleEmailChange = (e) => this.setState({ ...this.state, email: e.target.value })

  handlePasswordChange = (e) => this.setState({ ...this.state, password: e.target.value })

  render () {
    return (
      <View height='100%' style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("' + BgImage + '")',
        backgroundSize: 'cover'
      }}>
        <Paper style={{ padding: '20px' }}>
          <View column style={{ alignItems: 'center' }}>
            <LocalDrink style={{ width: '75px', height: '75px', marginTop: '-50px' }} color='#757575' />
          </View>
          {(this.state.loading) ? <CircularProgress /> : (
            <View column style={{ alignItems: 'center' }}>
              <h1 style={{ color: '#757575' }}>DrinkStat</h1>
              <TextField
                hintText='E-Mail'
                type='email'
                onChange={this.handleEmailChange}
                required />
              <TextField
                hintText='Password'
                type='password'
                onChange={this.handlePasswordChange}
                required />
              <RaisedButton label='Login' primary onClick={this.handleLogin} />
            </View>
          )}
        </Paper>
      </View>
    )
  }
}
