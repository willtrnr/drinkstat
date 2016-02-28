/* @flow */
import React from 'react'
import LinearProgress from 'material-ui/lib/linear-progress'
import Paper from 'material-ui/lib/paper'
import View from 'react-flexbox'
import { LineChart } from 'react-d3'

export default class HomeView extends React.Component<void, Props, void> {
  constructor (props) {
    super(props)
    this.state = {}
    this.getStats()
    // setInterval(this.getStats, 10000)
  }

  getStats = () => {
    fetch('/api/')
      .then((resp) => resp.json())
      .then((data) => this.setState({
        ...this.state,
        stats: [{
          values: data.map((p) => ({ x: new Date(p.timestamp), y: p.weight }))
        }, {
          strokeDashArray: '5,5',
          values: data.reduce((m, p) => [{
            x: (!m[0].x || new Date(p.timestamp) < m[0].x) ? new Date(p.timestamp) : m[0].x,
            y: (!m[0].y || p.weight > m[0].y) ? p.weight : m[0].y
          }, {
            x: (!m[1].x || new Date(p.timestamp) > m[1].x) ? new Date(p.timestamp) : m[1].x,
            y: (!m[1].y || p.weight < m[1].y) ? p.weight : m[1].y
          }], [{}, {}])
        }]
      }))
  }

  render () {
    console.log(this.state.stats)
    return (
      <View column style={{ alignItems: 'center' }}>
        <View row width='auto'>
          <Paper style={{ margin: '20px', padding: '10px 40px' }}>
            {(this.state.stats) ? <LineChart
              data={this.state.stats}
              width={1000}
              height={400}
              title='Level Chart'/> : <LinearProgress />}
          </Paper>
        </View>
      </View>
    )
  }
}
