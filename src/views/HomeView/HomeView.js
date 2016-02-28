/* @flow */
import React from 'react'
import View from 'react-flexbox'
import Paper from 'material-ui/lib/paper'
import { BarChart } from 'react-d3'

export default class HomeView extends React.Component {
  render () {
    return (
      <View column style={{ alignItems: 'center' }}>
        <View row width='auto'>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            <BarChart
              data={[{
                values: [
                  { x: 'Chipie', y: 12 },
                  { x: 'Matante', y: 10 },
                  { x: 'Blanche', y: 13 },
                  { x: 'Ptite Criss', y: 11 },
                  { x: 'Beer 5', y: 14 }
                ]
              }, {
                values: [
                  { x: 'Chipie', y: 13 },
                  { x: 'Matante', y: 12 },
                  { x: 'Blanche', y: 11 },
                  { x: 'Ptite Criss', y: 10 },
                  { x: 'Beer 5', y: 14 }
                ]
              }]}
              title='Monthly Consumption'
              width={900}
              height={400} />
          </Paper>
        </View>
      </View>
    )
  }
}
