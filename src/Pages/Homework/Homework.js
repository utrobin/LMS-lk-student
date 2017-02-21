import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Homework from '../../components/Homework/Homework';
import { colors } from '../../total/global/globalCSS';
import { FETCH_HOMEWORK_START } from '../../modules/homework/homework.constants';
import CircularProgress from 'material-ui/CircularProgress';
import { updateFilterStart } from '../../modules/homework/homework.actions';
import { connect } from 'react-redux';

import styles from './Homework.css'

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

  componentDidMount() {
    this.props.getHomework();
  }

  updateFilterStatus = e => {
    this.props.updateFilter({ status: e.target.value });
  };

  updateFilterDiscipline = e => {
    this.props.updateFilter({ discipline: e });
  };

  render() {
    const loadingHomework  = this.props.homework.loading.value;
    const loadingFilter  = this.props.homework.loadingFilter.value;

    const data = this.props.homework.data.value;

    if (loadingHomework) {
      return (
        <div className={ styles.loading }>
          <CircularProgress size={60} thickness={7} />
        </div>
      )
    }

    return (
      <div className={ styles.homeworks }>
        <div className={ styles.wrapperRadio }>
          <RadioButtonGroup name="shipSpeed" defaultSelected="uncompleted" onChange={ this.updateFilterStatus } className={ styles.radio }>
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
        <Tabs contentContainerClassName={ styles.tabs } onChange={ this.updateFilterDiscipline } className={ styles.tabWrapper }>
          <Tab label="Все предметы" value='all'>
            <Homework
              loading={ loadingFilter }
              data={ data.homework }
            />
          </Tab>
          {
            data.discipline.map((el, i) =>
              <Tab label={ el } key={ i } value={ el }>
                <Homework
                  loading={ loadingFilter }
                  data={ data.homework }
                />
              </Tab>
            )
          }
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

const mapDispatchToProps = dispatch => {
  return {
    getHomework: () => {
      dispatch({ type: FETCH_HOMEWORK_START })
    },
    updateFilter: data => {
      dispatch(updateFilterStart(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homeworks)

