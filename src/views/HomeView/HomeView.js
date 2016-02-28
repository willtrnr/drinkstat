/* @flow */
import React from 'react'
import View from 'react-flexbox'
import Paper from 'material-ui/lib/paper'
import { BarChart } from 'react-d3'

import HeatMap from './heatmap.jpg'

export default class HomeView extends React.Component {
  render () {
    return (
      <View column style={{ alignItems: 'center' }}>
        <View row width='auto'>
          <Paper style={{ margin: '10px', padding: '10px' }}>
            <img src={HeatMap} style={{ padding: 0, margin: 0 }} />
          </Paper>
        </View>
        <View row width='auto'>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            <BarChart
              data={[{
                values: [
                  { x: 'Chipie', y: 12 },
                  { x: 'Matante', y: 10 },
                  { x: 'Veuve Noire', y: 13 },
                  { x: 'Tite\'Kriss', y: 11 },
                  { x: 'Jouflue', y: 14 }
                ]
              }, {
                values: [
                  { x: 'Chipie', y: 13 },
                  { x: 'Matante', y: 12 },
                  { x: 'Veuve Noire', y: 11 },
                  { x: 'Tite\'Kriss', y: 10 },
                  { x: 'Jouflue', y: 14 }
                ]
              }]}
              title='Monthly Consumption'
              width={850}
              height={350} />
          </Paper>
        </View>
      </View>
    )
  }
}
