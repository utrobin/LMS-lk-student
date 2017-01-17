import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, grey100, cyan700 } from 'material-ui/styles/colors';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan700,
    // primary2Color: cyan500,
    // primary3Color: _colors.grey600,
    // accent1Color: _colors.pinkA200,
    // accent2Color: _colors.pinkA400,
    // accent3Color: _colors.pinkA100,
    // textColor: _colors.fullWhite,
    // secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
    // alternateTextColor: '#303030',
    canvasColor: grey100,
    // borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
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