import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import styles from './Friends.css';

const Friends = ({ data }) => (
  <Paper zDepth={1} className={ styles.friends }>
    <div>
      <a className={ styles.a }>
        <span className={ styles.span }>Друзья</span>
      </a>
      <div className={ styles.mark }>
        {
          data.map((el, i) =>
            <div className={ styles.profile } key={ i }>
              <a href={ `/profile/${el.id}` }><Avatar size={50} src={ el.img } /></a>
              <a className={ styles.link } href={ `/profile/${el.id}` }>{ el.name }</a>
            </div>
          )
        }
      </div>
    </div>
  </Paper>
);

export default Friends;
