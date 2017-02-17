import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Comment from 'material-ui/svg-icons/communication/comment';
import Plus from 'material-ui/svg-icons/image/exposure-plus-1';
import Avatar from 'material-ui/Avatar';
import Visibility from 'material-ui/svg-icons/action/visibility';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import RoutesMap from '../../RoutesMap/RoutesMap';
import { colors } from '../../total/global/globalCSS';

import styles from './Homework.css';

const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 1);
minDate.setHours(0, 0, 0, 0);

class Homework extends React.Component {

  getColor(status) {
    switch(status) {
      case 1:
      case 4:
        return colors.success;

      case 2:
      case 3:
        return colors.warning;

      case 5:
        return colors.error;

      default:
        return colors.error;
    }
  }

  getTextStatus(status) {
    switch(status) {
      case 1:
        return 'выдано';

      case 2:
        return 'ожидает проверки';

      case 3:
        return 'в доработке';

      case 4:
        return 'сдано';

      case 5:
        return 'просроченно';

      default:
        return 'выдано';
    }
  }


  render() {
    const data = this.props.data;

    if (this.props.loading) {
      return (
        <div className={ styles.loading }>
          <CircularProgress size={60} thickness={7} />
        </div>
      )
    }

    return(
      <div>
        {
          data.map((el, i) =>
            <Paper className={ styles.homework } key={ i }>
              <div className={ styles.dedline }>
                <div className={ styles.button }>
                  <RaisedButton
                    label={ el.status === 1 || el.status === 3 || el.status === 5  ? 'Сдать задание' : 'История сдачи' }
                    fullWidth={ true }
                    labelColor='#fff'
                    backgroundColor={ this.getColor(el.status) }
                    onTouchTap={ () => browserHistory.push(RoutesMap.chatHomework) }
                  />
                </div>
                дедлайн: <data className={ styles.dedlineData } style={{ color: this.getColor(el.status) }}>{ el.dedline }</data>
              </div>
              <a  className={ styles.h2 }><h2>Домашние задание №1</h2></a>
              <span className={ styles.span }>{ el.discipline }</span>

              <div dangerouslySetInnerHTML={{__html: el.text}} />

              <div className={ styles.hr }><Divider /></div>
              <div className={ styles.iconsWrapper }>
                <div className={ styles.icons }>
                  <div className={ styles.icon }>
                    <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
                    <i className={ styles.numbers }>{ el.views }</i>
                  </div>
                  <div className={ styles.icon }>
                    <Avatar size={24} color={ colors.icon } icon={<Plus />} />
                    <i className={ styles.numbers }>{ el.like }</i>
                  </div>
                  <div className={ styles.icon }>
                    <Avatar size={24} color={ colors.icon } icon={<Comment />} />
                    <i className={ styles.numbers }>{ el.comments }</i>
                  </div>
                </div>
              </div>
              <div className={ styles.supplement }>
                <div className={ styles.avtor }>
                  <Avatar size={30} src={ el.author.img } />
                  <a>{ el.author.name }</a>
                </div>
                <div className={ styles.status }>
                  Статус:&nbsp;
                  <span className={ styles.statusValue } style={{ color: this.getColor(el.status) }}>
                    { this.getTextStatus(el.status)}
                  </span>
                </div>
                <div className={ styles.score }>
                  { el.status === 1 ? `Макс баллов: ` : `Баллов: ` }
                  <span className={ styles.statusValue } style={{ color: this.getColor(el.status) }}>
                    { el.status === 1 ? `${el.points.maximum}` : `${el.points.received}/${el.points.maximum}` }
                  </span>
                </div>
              </div>
            </Paper>
          )
        }
      </div>
    )
  }
}

export default Homework;
