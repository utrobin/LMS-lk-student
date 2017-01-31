import React from 'react';
import Info from '../../components/Info/Info';
import Avatar from '../../components/Avatar/Avatar';
import Achievements from '../../components/Achievements/Achievements';
import Friends from '../../components/Friends/Friends';
import Skills from '../../components/Skills/Skills';
import Training from '../../components/Training/Training';
import Projects from '../../components/Projects/Projects';

import styles from './MyPage.css';

const MyPage = ({ state }) => (
    <div className={ styles.myPage }>
      { console.log(state) }
      <div className={ styles.main }>
        <Info />
        <Training />
        <Skills />
        <h3 className={ styles.h3 }>Проекты</h3>
        <Projects />
      </div>
      <div className={ styles.rightBlock }>
        <Avatar />
        <Achievements />
        <Friends />
      </div>
    </div>
);

export default MyPage;
