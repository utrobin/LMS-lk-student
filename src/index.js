import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './modules/index/index';

import TemplateWithLeftMenu from './templates/TemplateWithLeftMenu';
import MyPage from './Pages/MyPage/MyPage';
import Homeworks from './Pages/Homework/Homeworks';
import ChatHomework from './Pages/ChatHomework/ChatHomework';
import Performance from './Pages/Performance/Performance';
import Projects from './Pages/Projects/Projects';
import RoutesMap from './RoutesMap/RoutesMap';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const App = () => (
  <Provider store={ store }>
    <MuiThemeProvider>
      <Router history={ browserHistory }>
        <Route component={ TemplateWithLeftMenu }>
          <Route path={ RoutesMap.myPage } component={ MyPage } />
          <Route path={ RoutesMap.homework } component={ Homeworks } />
          <Route path={ RoutesMap.projects } component={ Projects } />
          <Route path={ RoutesMap.chatHomework } component={ ChatHomework } />
          <Route path={ RoutesMap.performance } component={ Performance } />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

render(
  <App />,
  document.querySelector('.app')
);
