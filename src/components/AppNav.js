import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Dashboard from 'material-ui/lib/svg-icons/action/dashboard'
import IconButton from 'material-ui/lib/icon-button'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import LeftNav from 'material-ui/lib/left-nav'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Person from 'material-ui/lib/svg-icons/social/person'

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
          </List>
        </LeftNav>
      </div>
    )
  }
}
