import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RoutesMap from '../../RoutesMap/RoutesMap';
import { Link } from 'react-router'

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
              <Link to={ `${RoutesMap.profile}/${el.login}` }><Avatar size={50} src={ el.img } /></Link>
              <Link to={ `${RoutesMap.profile}/${el.login}` } className={ styles.link }>{ el.name }</Link>
            </div>
          )
        }
      </div>
    </div>
  </Paper>
);

export default Friends;
