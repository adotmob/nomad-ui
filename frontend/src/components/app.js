import React, { PureComponent, PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { green800, green900 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppTopbar from './AppTopbar/AppTopbar'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#4b9a7d',
    primary2Color: green800,
    primary3Color: green900
  },
  appBar: {
    height: 50
  }
})

class App extends PureComponent {

  constructor (props) {
    super(props)

    injectTapEventPlugin()
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <AppTopbar { ...this.props } />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
