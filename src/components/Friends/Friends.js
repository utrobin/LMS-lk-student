import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import styles from './Friends.css';

const Friends = () => (
  <Paper zDepth={1} className={ styles.friends }>
    <div>
      <a className={ styles.a }>
        <span className={ styles.span }>Друзья</span>
      </a>
      <div className={ styles.mark }>
        <div className={ styles.profile }>
          <Avatar size={50} src="static/img/1.jpg" />
          <a className={ styles.link }>Денис</a>
        </div>
        <div className={ styles.profile }>
          <Avatar size={50} src="static/img/2.jpg" />
          <a className={ styles.link }>Илья</a>
        </div>
        <div className={ styles.profile }>
          <Avatar size={50} src="static/img/3.jpg" />
          <a className={ styles.link }>Сергей</a>
        </div>
        <div className={ styles.profile }>
          <Avatar size={50} src="static/img/3.jpg" />
          <a className={ styles.link }>Сергей</a>
        </div>
        <div className={ styles.profile }>
          <Avatar size={50} src="static/img/1.jpg" />
          <a className={ styles.link }>Денис</a>
        </div>
        <div className={ styles.profile }>
          <Avatar size={50} src="static/img/2.jpg" />
          <a className={ styles.link }>Илья</a>
        </div>
      </div>
    </div>
  </Paper>
);

export default Friends;
