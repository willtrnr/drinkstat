/* @flow */
import React from 'react'
import View from 'react-flexbox'
import Paper from 'material-ui/lib/paper'
import CreditCard from './credit_card.png'

export default class BillingView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View column style={{ alignItems: 'center' }}>
        <View row width='auto'>
          <Paper style={{ margin: '15px', padding: '10px 40px' }}>
            <img width={310} height={276} src={CreditCard} />
          </Paper>
        </View>
        <View row width='auto'>
          <Paper style={{ margin: '15px', padding: '10px 40px' }}>
            <h1>Informations: </h1>
          </Paper>
        </View>
      </View>
    )
  }
}
