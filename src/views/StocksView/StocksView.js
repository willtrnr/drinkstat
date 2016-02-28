/* @flow */
import React from 'react'
import CircularProgress from 'material-ui/lib/circular-progress'
import Paper from 'material-ui/lib/paper'
import View from 'react-flexbox'
import { LineChart, PieChart } from 'react-d3'

export default class StocksView extends React.Component<void, Props, void> {
  constructor (props) {
    super(props)
    this.getStats()
    this.state = { job: setInterval(this.getStats, 2000) }
  }

  componentWillUnmount () {
    this.state.job && clearTimeout(this.state.job)
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
    return (
      <View column style={{ alignItems: 'center' }}>
        <View row width='auto'>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            <PieChart
              data={[
                { label: 'Empty', value: 1 },
                { label: 'Remaining', value: 4 }
              ]}
              showOuterLabels={false}
              showInnerLabels={false}
              width={90}
              height={90}
              radius={45}
              innerRadius={35}
              title='Chipie' />
          </Paper>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            <PieChart
              data={[{ label: 'Empty', value: 1 }, { label: 'Remaining', value: 3 }]}
              showOuterLabels={false}
              showInnerLabels={false}
              width={90}
              height={90}
              radius={45}
              innerRadius={35}
              title='Matante' />
          </Paper>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            <PieChart
              data={[{ label: 'Empty', value: 3 }, { label: 'Remaining', value: 2 }]}
              showOuterLabels={false}
              showInnerLabels={false}
              width={90}
              height={90}
              radius={45}
              innerRadius={35}
              title='Veuve Noire' />
          </Paper>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            <PieChart
              data={[{ label: 'Empty', value: 2 }, { label: 'Remaining', value: 1 }]}
              showOuterLabels={false}
              showInnerLabels={false}
              width={90}
              height={90}
              radius={45}
              innerRadius={35}
              title={'Tite\'Kriss'} />
          </Paper>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            <PieChart
              data={[{ label: 'Empty', value: 1 }, { label: 'Remaining', value: 7 }]}
              showOuterLabels={false}
              showInnerLabels={false}
              width={90}
              height={90}
              radius={45}
              innerRadius={35}
              title='Jouflue' />
          </Paper>
        </View>
        <View row width='auto'>
          <Paper style={{ margin: '10px', padding: '10px 40px' }}>
            {(this.state.stats) ? <LineChart
              data={this.state.stats}
              width={850}
              height={350}
              title='Chipie'/> : <CircularProgress />}
          </Paper>
        </View>
      </View>
    )
  }
}
