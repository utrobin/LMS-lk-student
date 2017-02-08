import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Homework from '../../components/Homework/Homework';
import { colors } from '../../total/global/globalCSS';
import { FETCH_HOMEWORK_START } from '../../modules/homework/homework.constants';
import { connect } from 'react-redux';

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

class Homeworks extends React.Component {

  componentDidMount () {
    this.props.getHomework();
  }

  render() {

    return (
      <div className={ styles.homeworks }>
        { console.log(this.props) }
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
    )
  }
}

const mapStateToProps = state => {
  return {
    homework: state.homework,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHomework: () => {
      dispatch({ type: FETCH_HOMEWORK_START })
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homeworks)

