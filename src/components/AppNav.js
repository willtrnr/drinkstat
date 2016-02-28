import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
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
import Assessment from 'material-ui/lib/svg-icons/action/assessment'

export default class AppNav extends React.Component<void, Props, void> {
  constructor (props) {
    super(props)
    this.state = { navOpen: false }
  }

  toggleLeftNav = () => this.setState({ navOpen: !this.state.navOpen })

  setLeftNavOpen = (open) => this.setState({ navOpen: open })

  render () {
    return (
      <div>
        <AppBar
          title='DrinkStat'
          onLeftIconButtonTouchTap={this.toggleLeftNav}
          iconElementRight={
            <IconMenu
              iconButtonElement={<IconButton><Person /></IconButton>}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem primaryText='Refresh' />
              <MenuItem primaryText='Help' />
              <MenuItem primaryText='Sign out' onTouchTap={this.handleSignOut} />
            </IconMenu>
          } />
        <LeftNav docked={false} open={this.state.navOpen} onRequestChange={this.setLeftNavOpen}>
          <AppBar title='DrinkStat' onLeftIconButtonTouchTap={this.toggleLeftNav} />
          <List>
            <ListItem primaryText='Dashboard' leftIcon={<Dashboard />} />
            <ListItem primaryText='Stocks' leftIcon={<Assessment />} />
            <ListItem primaryText='Export Data' leftIcon={<CloudDownload />} />
            <ListItem primaryText='Billing' leftIcon={<CreditCard />} />
            <Divider />
            <ListItem primaryText='Settings' leftIcon={<Settings />} />
          </List>
        </LeftNav>
      </div>
    )
  }
}
