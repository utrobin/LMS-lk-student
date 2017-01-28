import React from 'react';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import MyPage from './pages/MyPage/MyPage';
import Homeworks from './pages/Homework/Homeworks';
import ChatHomework from './pages/ChatHomework/ChatHomework';

import './total/reset/reset.css';
import styles from './total/global/global.css';

const pages = [
  <MyPage />,
  <Homeworks />,
  <ChatHomework />
];

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pageId: 2
    };

    this.changePages = this.changePages.bind(this);
  }

  changePages(i) {
    console.log(this);
    this.setState({ pageId: i })
  }

  render() {
    return (
      <div>
        <Header />
        <div className={ styles.plugHeader } />
        <div className={ styles.content }>
          <LeftMenu
            changePage={ this.changePages }
          />
          <div className={ styles.plugLeftMenu } />
          { pages[this.state.pageId] }
        </div>
      </div>
    );
  }
};