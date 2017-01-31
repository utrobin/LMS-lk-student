import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import TemplateWithLeftMenu from './templates/TemplateWithLeftMenu';
import MyPage from './Pages/MyPage/MyPage';
import Homeworks from './Pages/Homework/Homeworks';
import ChatHomework from './Pages/ChatHomework/ChatHomework';
import Performance from './Pages/Performance/Performance';
import Projects from './Pages/Projects/Projects';
import RoutesMap from './RoutesMap/RoutesMap';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: cyan700,
    // primary2Color: cyan500,
    // primary3Color: grey800,
    // accent1Color: grey800,
    // accent2Color: grey800,
    // accent3Color: grey800,
    // textColor: '#ffffff',
    // secondaryTextColor: grey900,
    // alternateTextColor: grey900,
    // canvasColor: grey800,
    // borderColor: 'rgba(255, 255, 255, 0.3)',
    // disabledColor: 'rgba(255, 255, 255, 0.3)',
    // pickerHeaderColor: '#3bff2f',
    // clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route component={ TemplateWithLeftMenu }>
        <Route path={ RoutesMap.myPage } component={ MyPage } />
        <Route path={ RoutesMap.homework } component={ Homeworks } />
        <Route path={ RoutesMap.projects } component={ Projects } />
        <Route path={ RoutesMap.chatHomework } component={ ChatHomework } />
        <Route path={ RoutesMap.performance } component={ Performance } />
      </Route>
    </Router>
  </MuiThemeProvider>
);

render(
  <App />,
  document.querySelector('.index')
);
