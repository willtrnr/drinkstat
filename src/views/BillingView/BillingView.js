/* @flow */
import React from 'react'

export default class BillingView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
        <View row width='auto'>
          <Paper style={{ margin: '15px', padding: '10px 40px' }}>
            {(this.state.stats) ? <LineChart
              data={this.state.stats}
              width={1000}
              height={400}
              title='Level Chart'/> : <LinearProgress />}
          </Paper>
        </View>
        //<img src="credit_card.png"/>
    )
  }
}
