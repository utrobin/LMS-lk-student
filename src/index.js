import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, grey100, cyan700, grey800, grey900 } from 'material-ui/styles/colors';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan700,
    // primary2Color: cyan500,
    // primary3Color: grey800,
    // accent1Color: grey800,
    // accent2Color: grey800,
    // accent3Color: grey800,
    textColor: '#ffffff',
    // secondaryTextColor: grey900,
    alternateTextColor: grey900,
    canvasColor: grey800,
    // borderColor: grey800,
    // disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    // pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
    // clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
  },
});

const Wrapper = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

render(
  <Wrapper />,
  document.querySelector('.index')
);