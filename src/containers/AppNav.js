/* @flow */
import React, { PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Assessment from 'material-ui/lib/svg-icons/action/assessment'
import CloudDownload from 'material-ui/lib/svg-icons/file/cloud-download'
import CreditCard from 'material-ui/lib/svg-icons/action/credit-card'
import Dashboard from 'material-ui/lib/svg-icons/action/dashboard'
import Divider from 'material-ui/lib/divider'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Person from 'material-ui/lib/svg-icons/social/person'
import Settings from 'material-ui/lib/svg-icons/action/settings'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance'

let SelectableList = SelectableContainerEnhance(List)

type Props = {
  push: Function
};

export class AppNav extends React.Component<void, Props, void> {
  static propTypes = {
    push: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props)
    this.state = { navOpen: false }
  }

  toggleLeftNav = () => this.setState({ navOpen: !this.state.navOpen })

  setLeftNavOpen = (open) => this.setState({ navOpen: open })

  onRequestChangeList = (_, e) => this.props.push(e)

  render () {
    return (
      <div>
        <AppBar
          title='BlackBox'
          onLeftIconButtonTouchTap={this.toggleLeftNav}
          iconElementRight={
            <IconMenu
              iconButtonElement={<IconButton><Person /></IconButton>}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
              <MenuItem primaryText='Refresh' />
              <MenuItem primaryText='Help' />
              <MenuItem primaryText='Sign out' onTouchTap={this.handleSignOut} />
            </IconMenu>
          } />
        <LeftNav docked={false} open={this.state.navOpen} onRequestChange={this.setLeftNavOpen}>
          <AppBar title='BlackBox' onLeftIconButtonTouchTap={this.toggleLeftNav} />
          <SelectableList valueLink={{value: location.pathname, requestChange: this.onRequestChangeList}}>
            <ListItem primaryText='Dashboard' leftIcon={<Dashboard />} value='/' />
            <ListItem primaryText='Stocks' leftIcon={<Assessment />} value='/stocks' />
            <ListItem primaryText='Export Data' leftIcon={<CloudDownload />} value='/export' />
            <ListItem primaryText='Billing' leftIcon={<CreditCard />} value='/billing' />
            <Divider />
            <ListItem primaryText='Settings' leftIcon={<Settings />} value='/settings' />
          </SelectableList>
        </LeftNav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  router: state.router
})

export default connect((mapStateToProps), {
  push
})(AppNav)
