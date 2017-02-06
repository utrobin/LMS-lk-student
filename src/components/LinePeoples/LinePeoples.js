import React from 'react';
import Avatar from 'material-ui/Avatar';

import styles from './LinePeoples.css';

const LinePeoples = ({ data }) => (
  <div className={ styles.peoples }>
    {
      data.map((el, i) =>
        <Avatar key={ i } className={ styles.avatar } size={33} src={ el.img } />
      )
    }
  </div>
);

export default LinePeoples;
