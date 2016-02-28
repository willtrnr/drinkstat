/* @flow */
import React from 'react'
import View from 'react-flexbox'
import Paper from 'material-ui/lib/paper'
import Kitten from 'components/Kitten'

export default class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View column style={{ alignItems: 'center' }}>
        <View row width='auto'>
          <Paper style={{ margin: '15px', padding: '10px 40px' }}>
            <Kitten width={320} />
          </Paper>
        </View>
      </View>
    )
  }
}
