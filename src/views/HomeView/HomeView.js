/* @flow */
import React from 'react'
import View from 'react-flexbox'
import Paper from 'material-ui/lib/paper'
import HeatMap from './heatmap.jpg'

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
            <img width={500} height={290} src={HeatMap} />
          </Paper>
        </View>
      </View>
    )
  }
}
