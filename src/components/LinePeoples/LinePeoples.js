import React from 'react';
import Avatar from 'material-ui/Avatar';
import RoutesMap from '../../RoutesMap/RoutesMap';
import { Link } from 'react-router'

import styles from './LinePeoples.css';

const LinePeoples = ({ data }) => (
  <div className={ styles.peoples }>
    {
      data.map((el, i) =>
        <Link to={ `${RoutesMap.profile}/${el.login}` } key={ i }>
          <Avatar className={ styles.avatar } size={33} src={ el.img } />
        </Link>
      )
    }
  </div>
);

export default LinePeoples;
