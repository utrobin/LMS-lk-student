import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import LinePeoples from '../LinePeoples/LinePeoples';
import { green600, red500, redA100, green300 } from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';

import styles from './Skill.css';

const iconStyles = {
  marginRight: 0,
};

const Skill = ({ myPage, value, count, peoples, handleOpen, vote, addVoice, deleteVoice }) => (
  <div className={ styles.skill }>
    <Chip
      className={ styles.chip }
      onRequestDelete={ myPage === true ? () => handleOpen(value) : undefined }
    >
      <div className={ styles.chipWrapper }>
        <i className={ styles.i }>{ count }</i>
        <span>{ value }</span>
        {
          myPage ?
            ''
            :
            vote ?
              <FontIcon
                className={`material-icons ${styles.icon}`}
                hoverColor={green600}
                style={iconStyles}
                color={green300}
                onTouchTap={ () => addVoice(value) }
              >
                add_circle
              </FontIcon>
              :
              <FontIcon
                className={`material-icons ${styles.icon}`}
                hoverColor={red500}
                style={iconStyles}
                color={redA100}
                onTouchTap={ () => deleteVoice(value) }
              >
                remove_circle
              </FontIcon>
        }
      </div>
    </Chip>
    <LinePeoples
      data={ peoples }
    />
    <div className={ styles.divider }><Divider /></div>
  </div>
);

export default Skill;
