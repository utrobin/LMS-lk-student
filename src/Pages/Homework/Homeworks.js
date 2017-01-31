import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Homework from '../../components/Homework/Homework';
import { colors } from '../../total/global/globalCSS';

import styles from './Homeworks.css'

const stylesJS = {
  radio: {
    width: 'auto',
    whiteSpace: 'nowrap',
  },
  label: {
    color: colors.secondText
  }
};

const Homeworks = ({ changePage }) => (
  <div className={ styles.homeworks }>
    <div className={ styles.wrapperRadio }>
      <RadioButtonGroup name="shipSpeed" defaultSelected="uncompleted" className={ styles.radio }>
        <RadioButton
          value="uncompleted"
          label="Открытые"
          style={ stylesJS.radio }
          labelStyle={ stylesJS.label }
        />
        <RadioButton
          value="completed"
          label="Завершенные"
          style={ stylesJS.radio }
          labelStyle={ stylesJS.label }
        />
        <RadioButton
          value="all"
          label="Все задания"
          style={ stylesJS.radio }
          labelStyle={ stylesJS.label }
        />
      </RadioButtonGroup>
    </div>
    <Tabs contentContainerClassName={ styles.tabs }>
      <Tab label="Все предметы" >
        <Homework />
      </Tab>
      <Tab label="АИСД" >
        <Homework />
      </Tab>
      <Tab
        label="WEB-технологии"
      >
        <Homework />
      </Tab>
      <Tab
        label="С/С++"
      >
        <Homework />
      </Tab>
    </Tabs>
  </div>
);

export default Homeworks;
