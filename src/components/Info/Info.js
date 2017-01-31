import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { colors } from '../../total/global/globalCSS';

import styles from './Info.css';

const MyPage = () => (
  <Paper className={ styles.info } zDepth={1} >
    <div className={ styles.shortInfo }>
      <h4 className={ styles.status }>online</h4>
      <h2>Егор Утробин</h2>
      <div className={ styles.activity }>
        <span className={ styles.rating }>Сила: 8.32</span>
        <span className={ styles.rating }>Рейтинг: 7.24</span>
      </div>
      <h3 className={ styles.group }>Студент</h3>
      <h3 className={ styles.group }>Группы <a>АПО-31</a></h3>
    </div>
    <Divider />
    <div className={ styles.data }>
      <div className={ styles.social }>
        <a><img className={ styles.socialIcon } src="static/img/facebook.svg" width="25" height="25" alt="logo"/></a>
        <a><img className={ styles.socialIcon } src="static/img/vk.svg" width="25" height="25" alt="logo"/></a>
        <a><img className={ styles.socialIcon } src="static/img/github.svg" width="25" height="25" alt="logo"/></a>
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Дата рождения:</span>
        <a>21 февраля 1997г.</a>
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Кафедра в МГТУ:</span>
        <a>ИУ 5</a>
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Email:</span>
        <a>egor.utrobin@gmail.com</a>
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Моб. телефон</span>
        <span>+7 925 197 52 86</span>
      </div>
      <FlatButton
        style={{ marginTop: 5, width: '100%', textAlign: 'left' }}
        labelStyle={{ marginLeft: 165, paddingLeft: 0, color: colors.linkText, fontSize: 13 }}
        label="Показать подробную информацию"
      />
    </div>
  </Paper>
);

export default MyPage;
