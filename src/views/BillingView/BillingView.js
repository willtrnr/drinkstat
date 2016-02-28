/* @flow */
import React from 'react'
import View from 'react-flexbox'
import Paper from 'material-ui/lib/paper'
import CreditCard from './credit_card.png'
import CreditCardBB from './credit_card_bb.png'
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import FloatingActionButton from 'material-ui/lib/floating-action-button';

export default class BillingView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    var titleStyle = {
      fontSize: '16px',
      marginTop: '20px'
    }
    var pStyle = {
      marginBottom: '2px',
      marginTop: '2px'
    }
    var modifyStyle = {
      marginTop: '50px',
      textAlign: 'right',
      textDecorationLine: 'underline',
      color: 'blue'
    }
    return (
      <View column style={{ alignItems: 'center' }}>
        <View row width='auto'>
          <Paper style={{ margin: '15px', padding: '10px 40px' }}>
            <img width={310} height={296} src={CreditCard} />
          </Paper>
          <Paper style={{ margin: '15px', padding: '10px 40px', width: '300px' }}>
            <h1 style={titleStyle}>Owner:</h1>
            <p style={pStyle}>Smith, Michelle</p>
            <h1 style={titleStyle}>Billing address:</h1>
            <p style={pStyle}>1600 Pennsylvania Avenue NW</p>
            <p style={pStyle}>Washington, DC 20500</p>
            <p style={modifyStyle}><a href={'#'}>Modify</a></p>
          </Paper>
        </View>
        <View row width='auto'>
          <Paper style={{ margin: '15px', padding: '10px 40px' }}>
            <img width={310} height={196} src={CreditCardBB} />
          </Paper>
          <Paper style={{ margin: '15px', padding: '10px 40px', width: '300px' }}>
            <h1 style={titleStyle}>Owner:</h1>
            <p style={pStyle}>Smith, Barack</p>
            <h1 style={titleStyle}>Billing address:</h1>
            <p style={pStyle}>1600 Pennsylvania Avenue NW</p>
            <p style={pStyle}>Washington, DC 20500</p>
            <p style={modifyStyle}><a href={'#'}>Modify</a></p>
          </Paper>
        </View>
        <View row width='auto' style={{ alignItems: 'right' }}>
          <FloatingActionButton style={{marginTop: '40px'}}>
            <ContentAdd />
          </FloatingActionButton> 
        </View>
      </View>
    )
  }
}
