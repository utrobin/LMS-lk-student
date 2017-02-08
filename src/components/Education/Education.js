import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { colors } from '../../total/global/globalCSS';

import styles from './Education.css';

const LongProgramSemester = ({ data }) => (
  <div>
    {
      data.map((el, i) =>
        <div className={ styles.subject } key={ i }>
          <span className={ styles.span }>{ el.name }</span>
          <span className={ styles.rating }>{ el.rating }</span>
          <div className={ styles.divider }><Divider /></div>
        </div>
      )
    }
  </div>
);

class LongProgram extends React.Component {
  constructor() {
    super();
    this.state = {open: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({open: !this.state.open})
  }

  render() {
    const data = this.props.data;

    return(
      <div>
        <div className={ styles.subject }>
          <span className={ styles.mainSpan }>{ data.name }</span>
          <span className={ styles.rating }>
              <FlatButton
                label={ this.state.open ? 'Скрыть' : 'Показать подробно' }
                labelStyle={{ color: colors.linkText, fontSize: 12 }}
                onTouchTap={ this.toggle }
              />
            </span>
          <div className={ styles.dividerMain }><Divider /></div>
        </div>

        <div className={ styles.semesters } style={{ display: this.state.open ? 'flex' : 'none' }}>
          {
            data.semesters.map((el, i) =>
              <div className={ styles.semester } key={ i }>
                <span>{ i + 1 } семестр</span>
                <LongProgramSemester
                  data={ el }
                />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

class Semester extends React.Component {

  render() {
    if (this.props.data.semesters.length === 1) {
      const subject = this.props.data.semesters[0];

      return (
        <div className={ styles.subject }>
          <span className={ styles.span }>{ subject.name }</span>
          <span className={ styles.rating }>{ subject.rating }</span>
          <div className={ styles.divider }><Divider /></div>
        </div>
      )
    }
    else {
      return (
       <LongProgram
         data={ this.props.data }
       />
      )
    }
  }
}

export default class Education extends React.Component {

  render() {
    const education = this.props.education;

    return (
      <Paper className={ styles.traning } zDepth={1}>
        <div className={ styles.clear }></div>
        <h3 className={ styles.h3 }>Обучение</h3>

        {
          education.performance.map((el, i) =>
            <div className={ styles.perfomance } key={ i }>
              <span className={ styles.label }>{ el.title }</span>
              <span className={ styles.where }>
                <i className={ styles.i }>{ el.set.i } </i>
                в наборе из { el.set.all }
              </span>
              <span className={ styles.where }>
                <i className={ styles.i }>{ el.semester.i }</i>
                в семестре из { el.semester.all }
              </span>
            </div>
          )
        }

        {
          education.completed.map((el, i) =>
            <Semester
              data={ el }
              key={ i }
            />
          )
        }
      </Paper>
    );
  }
}
