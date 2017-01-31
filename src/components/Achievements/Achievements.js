import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import styles from './Achievements.css';

const Achievements = () => (
  <Paper zDepth={1} className={ styles.achievements }>
    <div>
      <a className={ styles.a }>
        <span className={ styles.h }>Достижения</span>
      </a>
      <div className={ styles.mark }>
        <Avatar size={60} src="static/img/ach5.png" />
        <Avatar size={60} src="static/img/ach1.png" />
        <Avatar size={60} src="static/img/ach2.png" />
        <Avatar size={60} src="static/img/ach3.png" />
        <Avatar size={60} src="static/img/ach4.png" />
        <Avatar size={60} src="static/img/ach5.png" />
      </div>
    </div>
  </Paper>
);

export default Achievements;
