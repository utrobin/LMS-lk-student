import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { colors } from '../../../../total/global/globalCSS';

import styles from './Training.css';

export default class Training extends React.Component {
  constructor() {
    super();
    this.state = { open: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <Paper className={ styles.traning } zDepth={1}>
        <div className={ styles.clear }></div>
        <h3 className={ styles.h3 }>Обучение</h3>
        <div className={ styles.perfomance}>
          <span className={ styles.label }>Успеваемость:</span>
          <span className={ styles.where }>
          <i className={ styles.i }>3</i>
          в наборе из 52
        </span>
          <span className={ styles.where }>
          <i className={ styles.i }>11</i>
          в семестре из 52
        </span>
        </div>
        <div className={ styles.subject }>
          <span className={ styles.span }>Базовое администрирование Linux (Набор Весна 2015)</span>
          <span className={ styles.rating }>ОТЛ.</span>
          <div className={ styles.divider }><Divider /></div>
        </div>
        <div className={ styles.subject }>
          <span className={ styles.span }>Разработка приложений на iOS (Набор Осень 2015)</span>
          <span className={ styles.rating }>ОТЛ.</span>
          <div className={ styles.divider }><Divider /></div>
        </div>
        <div className={ styles.subject }>
          <span className={ styles.mainSpan }>Системный архитектор (Набор Осень 2013)</span>
          <span className={ styles.rating }>
        <FlatButton
          label={ this.state.open ? 'Скрыть' : 'Показать подробно' }
          labelStyle={{ color: colors.linkText, fontSize: 12 }}
          onTouchTap={ this.toggle }
        />
      </span>
          <div className={ styles.dividerMain }><Divider /></div>
        </div>

        <div className={ styles.semesters } style={{ display: this.state.open ? 'flex' : 'none'}}>
          <div className={ styles.semester }>
            <span>1 семестр</span>
            <div className={ styles.subject }>
              <span className={ styles.span }>Web-технологии</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Алгоритмы и структуры данных</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Углубленное программирование на C/C++</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
          </div>
          <div className={ styles.semester }>
            <span>2 семестр</span>
            <div className={ styles.subject }>
              <span className={ styles.span }>Проектирование интерфейсов</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Базы данных</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Углубленное программирование на Java</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Фронтенд разработка</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Тренинг "Навыки деловых коммуникаций"</span>
              <span className={ styles.rating }>ЗАЧ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
          </div>
          <div className={ styles.semester }>
            <span>3 семестр</span>
            <div className={ styles.subject }>
              <span className={ styles.span }>Мобильная разработка</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Проектирование высоконагруженных систем</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Безопасность интернет-приложений</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Обеспечение качества в разработке ПО</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
          </div>
          <div className={ styles.semester }>
            <span>4 семестр</span>
            <div className={ styles.subject }>
              <span className={ styles.span }>Управление продуктом и проектом</span>
              <span className={ styles.rating }>ОТЛ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Разработка выпускного проекта</span>
              <span className={ styles.rating }>ЗАЧ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Методологии разработки</span>
              <span className={ styles.rating }>ЗАЧ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Мастерство презентации</span>
              <span className={ styles.rating }>ЗАЧ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
            <div className={ styles.subject }>
              <span className={ styles.span }>Лидерство и психология управления</span>
              <span className={ styles.rating }>ЗАЧ.</span>
              <div className={ styles.divider }><Divider /></div>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}
