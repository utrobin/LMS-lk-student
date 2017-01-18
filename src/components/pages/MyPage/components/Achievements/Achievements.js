import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import styles from './Achievements.css';

const Achievements = () => (
  <Paper zDepth={1} className={ styles.achievements }>
    <div className={ styles.performance }>
      <a className={ styles.a }>
        <span className={ styles.span }>Успеваемость</span>
      </a>
      <div>
        <span className={ styles.spanRating }>В наборе: </span>
        <i className={ styles.i }>3 <span className={ styles.spanSupplement }> из 52</span></i>
      </div>
      <div>
        <span className={ styles.spanRating }>В семестре: </span>
        <i className={ styles.i }>2 <span className={ styles.spanSupplement }> из 52</span></i>
      </div>
    </div>

    <div>
      <a className={ styles.a }>
        <span className={ styles.span }>Значки</span>
      </a>
      <div className={ styles.mark }>
        <Avatar src="static/img/ach1.png" />
        <Avatar src="static/img/ach2.png" />
        <Avatar src="static/img/ach3.png" />
        <Avatar src="static/img/ach4.png" />
        <Avatar src="static/img/ach5.png" />
      </div>
    </div>



  </Paper>
);

export default Achievements;
