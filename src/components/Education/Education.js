import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { colors } from '../../total/global/globalCSS';

import styles from './Education.css';

const Semester = ({ number, data }) => (
  <div className={ styles.semester }>
    <span>{ number } семестр</span>
    {
      data.map((el, i) =>
        <div className={ styles.subject } key={ i }>
          <span className={ styles.span }>{ el.title }</span>
          <span className={ styles.rating }>{ el.rating }</span>
          <div className={ styles.divider }><Divider /></div>
        </div>
      )
    }
  </div>
);

const Semesters = ({ data, open }) => (
  <div className={ styles.semesters } style={{ display: open ? 'flex' : 'none' }}>
    {
      data.map((el, i) =>
        <Semester
          key={ i }
          number={ i + 1}
          data={ el }
        />
      )
    }
  </div>
);

export default class Education extends React.Component {
  constructor() {
    super();
    this.state = { open: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

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
            <div className={ styles.subject } key={ i }>
              <span className={ styles.span }>{ el.title }</span>
              <span className={ styles.rating }>{ el.rating }</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
          )
        }

        {
          education.SA.value === true ?
            <div className={ styles.subject }>
              <span className={ styles.mainSpan }>{ education.SA.title }</span>
              <span className={ styles.rating }>
                <FlatButton
                  label={ this.state.open ? 'Скрыть' : 'Показать подробно' }
                  labelStyle={{ color: colors.linkText, fontSize: 12 }}
                  onTouchTap={ this.toggle }
                />
              </span>
              <div className={ styles.dividerMain }><Divider /></div>
            </div> :
            ''
        }

        {
          education.SA.value === true ?
            <Semesters
              open={ this.state.open }
              data={ education.SA.semesters }
            />
            : ''
        }
      </Paper>
    );
  }
}
