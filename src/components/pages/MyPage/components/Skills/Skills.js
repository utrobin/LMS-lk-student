import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import styles from './Skills.css';

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

const dataSource = ['JavaScript', 'C/C++', 'Python'];

const Skills = () => (
  <Paper className={ styles.skills } zDepth={1} >
    <span className={ styles.span }>Навыки:</span>
    <div>
      <div className={ styles.skill }>
        <Chip className={ styles.chip } onRequestDelete={handleRequestDelete}>
          <i className={ styles.i }>5</i>
          <span>JavaScript</span>
        </Chip>
        <div className={ styles.peoples }>
          <Avatar className={ styles.avatar } size={33} src="static/img/1.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/2.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/3.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/1.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/2.jpg" />
        </div>
        <div className={ styles.divider }><Divider /></div>
      </div>
      <div className={ styles.skill }>
        <Chip className={ styles.chip } onRequestDelete={handleRequestDelete}>
          <i className={ styles.i }>3</i>
          <span>Linux</span>
        </Chip>
        <div className={ styles.peoples }>
          <Avatar className={ styles.avatar } size={33} src="static/img/1.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/2.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/3.jpg" />
        </div>
        <div className={ styles.divider }><Divider /></div>
      </div>
      <div className={ styles.skill }>
        <Chip className={ styles.chip } onRequestDelete={handleRequestDelete}>
          <i className={ styles.i }>4</i>
          <span>C/C++</span>
        </Chip>
        <div className={ styles.peoples }>
          <Avatar className={ styles.avatar } size={33} src="static/img/1.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/2.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/3.jpg" />
          <Avatar className={ styles.avatar } size={33} src="static/img/1.jpg" />
        </div>
        <div className={ styles.divider }><Divider /></div>
      </div>
    </div>
    <div>
      <AutoComplete
        floatingLabelText="Навык"
        filter={AutoComplete.noFilter}
        openOnFocus={true}
        dataSource={dataSource}
      />
      <div className={ styles.button }>
        <RaisedButton label="Добавить навык" primary={true} fullWidth={true} />
      </div>
    </div>
  </Paper>
);

export default Skills;
