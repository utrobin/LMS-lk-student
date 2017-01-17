import React from 'react';
import Paper from 'material-ui/Paper';

import styles from './Info.css';

const MyPage = () => (
  <Paper className={ styles.info } zDepth={1} >
    <h4 className={ styles.status }>online</h4>
    <h2>Егор Утробин</h2>
  </Paper>
);

export default MyPage;
