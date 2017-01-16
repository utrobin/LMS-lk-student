import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const Wrapper = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

render(
  <Wrapper />,
  document.querySelector('.index')
);