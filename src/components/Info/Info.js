import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import styles from './Info.css';

const Info = ({ info }) => (
  <Paper className={ styles.info } zDepth={1} >
    <div className={ styles.shortInfo }>
      <h4 className={ styles.status }>{ info.status }</h4>
      <h2>{ info.name }</h2>
      <div className={ styles.activity }>
        <span className={ styles.rating }>Сила: { info.power }</span>
        <span className={ styles.rating }>Рейтинг: { info.rating }</span>
      </div>
      <h3 className={ styles.group }>{ info.standing }</h3>
      <h3 className={ styles.group }>{ info.standing !== 'Преподаватель' ? `Группы: ` : '' }
        {
          info.group.map((el, i) =>
            <span key={ i }><a className={ styles.a } href={ el.link }>{ el.value }</a>{ info.group.length === i + 1 ? '' : ','} </span>
          )
        }
      </h3>
    </div>
    <Divider />
    <div className={ styles.data }>
      <div className={ styles.social }>
        {
          info.social.map((el, i) =>
            <a href={ el.link } key={ i }><img className={ styles.socialIcon } src={ el.img } width="25" height="25" alt={ el.value }/></a>
          )
        }
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Дата рождения:</span>
        <span>{ info.born }</span>
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Кафедра в МГТУ:</span>
        <a href={ info.department.link }>{ info.department.value }</a>
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Email:</span>
        <a href={ `mailto:${info.email}` }>{ info.email }</a>
      </div>
      <div className={ styles.label }>
        <span className={ styles.span }>Моб. телефон</span>
        <a href={ `tel:${info.email}` }>{ info.telephone }</a>
      </div>
      {/*<FlatButton*/}
        {/*style={{ marginTop: 5, width: '100%', textAlign: 'left' }}*/}
        {/*labelStyle={{ marginLeft: 165, paddingLeft: 0, color: colors.linkText, fontSize: 13 }}*/}
        {/*label="Показать подробную информацию"*/}
      {/*/>*/}
    </div>
  </Paper>
);

export default Info;
