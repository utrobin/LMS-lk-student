import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Avatar.css';

const Avatar = () => (
  <Paper className={ styles.avatarBlock } zDepth={1} >
    <img className={ styles.avatar } src="static/img/avatar.jpg" width="250" height="250" alt="avatar"/>
    <div className={ styles.controls }>
      <RaisedButton className={ styles.button } label="Написать сообщение" primary={true} fullWidth={true} />
      <RaisedButton className={ styles.button } label="Добавить в друзья" primary={true} fullWidth={true} />
    </div>
  </Paper>
);

export default Avatar;
