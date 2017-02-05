import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import styles from './Achievements.css';

const Achievements = ({ data }) => (
  <Paper zDepth={1} className={ styles.achievements }>
    <div>
      <a className={ styles.a }>
        <span className={ styles.h }>Достижения</span>
      </a>
      <div className={ styles.mark }>
        {
          data.map((el, i) =>
            <Avatar size={60} src={ el } key={ i } />
          )
        }
      </div>
    </div>
  </Paper>
);

export default Achievements;
