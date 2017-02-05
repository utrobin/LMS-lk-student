import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './Avatar.css';

const Avatar = ({ img, myPage }) => (
  <Paper className={ styles.avatarBlock } zDepth={1} >
    <img className={ styles.avatar } src={ img } width="250" height="250" alt="avatar"/>
    <div className={ styles.controls }>
      {
        myPage === true ?
          <RaisedButton className={ styles.button } label="Редактировать" primary={true} fullWidth={true} />
          :
          <div>
            <RaisedButton className={ styles.button } label="Написать сообщение" primary={true} fullWidth={true} />
            <RaisedButton className={ styles.button } label="Добавить в друзья" primary={true} fullWidth={true} />
          </div>
      }
    </div>
  </Paper>
);

export default Avatar;
