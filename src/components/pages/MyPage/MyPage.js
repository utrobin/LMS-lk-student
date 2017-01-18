import React from 'react';
import Info from './components/Info/Info';
import Avatar from './components/Avatar/Avatar';
import Achievements from './components/Achievements/Achievements';
import Friends from './components/Friends/Friends';

import styles from './MyPage.css';

const MyPage = () => (
    <div>
      <Info />
      <div className={ styles.rightBlock }>
        <Avatar />
        <Achievements />
        <Friends />
      </div>
    </div>
);

export default MyPage;
