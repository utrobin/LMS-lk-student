import React from 'react';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import MyPage from './pages/MyPage/MyPage';

import './total/reset/reset.css';
import styles from './total/global/global.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className={ styles.content }>
          <LeftMenu />
          <MyPage />
        </div>
      </div>
    );
  }
};