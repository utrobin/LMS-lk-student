import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Comment from 'material-ui/svg-icons/communication/comment';
import Plus from 'material-ui/svg-icons/image/exposure-plus-1';
import Avatar from 'material-ui/Avatar';
import Visibility from 'material-ui/svg-icons/action/visibility';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import RoutesMap from '../../RoutesMap/RoutesMap';
import { colors } from '../../total/global/globalCSS';

import styles from './Homework.css';

const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 1);
minDate.setHours(0, 0, 0, 0);

const Homework = () => (
  <div>
    <Paper className={ styles.homework }>
      <div className={ styles.dedline }>
        <div className={ styles.button }>
          <RaisedButton
            label="Сдать задание"
            fullWidth={true}
            secondary={true}
            onTouchTap={ () => browserHistory.push(RoutesMap.chatHomework) }
          />
        </div>
        дедлайн: <data className={ styles.dedlineData } style={{ color: colors.error }}>8 января 2016 г.</data>
      </div>
      <a  className={ styles.h2 }><h2>Домашние задание №1</h2></a>
      <span className={ styles.span }>Алгоритмы (первый семестр)</span>
      <div>
        <p>Доброго дня!</p>

        <p>
          Основной источник информации по bootstrap
          <a>http://getbootstrap.com/css/</a>
          <a>http://getbootstrap.com/components/</a>
        </p>
        <p>
          Скачать стартовый шаблон вместе со всеми js, css, шрифтами и проч.
          wget -p http://getbootstrap.com/examples/starter-template/
        </p>
        <p>
          Инструмент для статической проверки верстки
          <a>https://github.com/twbs/bootlint</a>
          инструмент bootlint полезен для проверки вашей верстки на соответствие идеологии и подходам заложенным в bootstap
          помогает выявить существующие и потенциальные ошибки
          <a>https://github.com/twbs/bootlint/wiki</a>
          может использоваться как инструмент командной строки или как js bookmarklet
        </p>
        <p>
          Всем удачи!
        </p>
      </div>
      <div className={ styles.hr }><Divider /></div>
      <div className={ styles.iconsWrapper }>
        <div className={ styles.icons }>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
            <i className={ styles.numbers }>78</i>
          </div>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Plus />} />
            <i className={ styles.numbers }>8</i>
          </div>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Comment />} />
            <i className={ styles.numbers }>7</i>
          </div>
        </div>
      </div>
      <div className={ styles.supplement }>
        <div className={ styles.avtor }>
          <Avatar size={30} src="static/img/step.jpg" />
          <a>Степан Мацкевич</a>
        </div>
        <div className={ styles.status }>
          Статус: <span className={ styles.statusValue } style={{ color: colors.error }}>просроченно</span>
        </div>
        <div className={ styles.score }>
          Mакс. баллов: <span className={ styles.statusValue } style={{ color: colors.error }}>15</span>
        </div>
      </div>
    </Paper>

    <Paper className={ styles.homework }>
      <div className={ styles.dedline }>
        <div className={ styles.button }>
          <RaisedButton
            label="История сдача"
            fullWidth={true}
            labelStyle={{ color: '#fff' }}
            backgroundColor={ colors.warning }
            onTouchTap={ () => window.changePages(2) }
          />
        </div>
        дедлайн: <data className={ styles.dedlineData }>25 января 2016 г.</data>
      </div>
      <a  className={ styles.h2 }><h2>Задание на второй модуль</h2></a>
      <span className={ styles.span }>Алгоритмы (первый семестр)</span>
      <div>
        <p>Здесь само задание: <a>https://drive.google.com/open?id=0B6oYnrxwl0UcazJsNnBTeVlIOXc.</a></p>
        <p>
          Контест: <a>http://tp-test1.tech-mail.ru:5000/contest/74/status/</a>
          Ссылка на старый интерфейс: <a>http://tp-test1.tech-mail.ru/cgi-bin/new-client?contest_id=74</a>.
        </p>
        <p>
          Ведомость там же: <a>https://drive.google.com/open?id=1QfVZcANCcXQCxBo1WNVX3wDg_MLEu40iewlSgomy1Os</a>
        </p>
        <p>
          В задании есть соревнование - 7 задача. За 1, 2 и 3 место в каждой группе предусмотрены призовые баллы! Подробности в задании.
        </p>
        <p>Успехов!</p>
      </div>
      <div className={ styles.hr }><Divider /></div>
      <div className={ styles.iconsWrapper }>
        <div className={ styles.icons }>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
            <i className={ styles.numbers }>78</i>
          </div>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Plus />} />
            <i className={ styles.numbers }>8</i>
          </div>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Comment />} />
            <i className={ styles.numbers }>7</i>
          </div>
        </div>
      </div>
      <div className={ styles.supplement }>
        <div className={ styles.avtor }>
          <Avatar size={30} src="static/img/step.jpg" />
          <a>Степан Мацкевич</a>
        </div>
        <div className={ styles.status }>
          Статус: <span className={ styles.statusValue }>ожидает проверки</span>
        </div>
        <div className={ styles.score }>
          Mакс. баллов: <span className={ styles.statusValue }>15</span>
        </div>
      </div>
    </Paper>

    <Paper className={ styles.homework }>
      <div className={ styles.dedline }>
        <div className={ styles.button }>
          <RaisedButton
            label="История сдачи"
            fullWidth={ true }
            backgroundColor={ colors.success }
            labelColor='#fff'
            onTouchTap={ () => window.changePages(2) }
          />
        </div>
        дедлайн: <data className={ styles.dedlineData } style={{ color: colors.success }}>14 января 2016 г.</data>
      </div>
      <a  className={ styles.h2 }><h2>Материалы для разработки проекта</h2></a>
      <span className={ styles.span }>Web-технологии (первый семестр)</span>
      <div>
        <p>
          Методичка по настройке nginx: <a>https://docs.google.com/document/d/1BuH_QTZtfgXVor_z9ANRb15Oxd-YrBkeMCNzldhCzGo/edit</a>
        </p>
        <p>
          Django first steps: <a>http://djbook.ru/rel1.9/intro/tutorial01.html</a> <a>http://djbook.ru/rel1.9/intro/tutorial02.html</a> <a>http://djbook.ru/rel1.9/intro/tutorial03.html http://djbook.ru/rel1.9/intro/tutorial04.html</a>
        (дальнейший шаги не нужны)
        </p>
        <p>
          Если у вас возникают трудности с использованием Python, потратьте часа 4-6, пройдите туториалы по самому языку: <a>https://www.google.ru/search?q=python+quick+start&oq=python+quick+start&aqs=chrome..69i57j0l5.2980j0j7&client=ubuntu&sourceid=chrome&ie=UTF-8</a>
        </p>
      </div>
      <div className={ styles.hr }><Divider /></div>
      <div className={ styles.iconsWrapper }>
        <div className={ styles.icons }>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
            <i className={ styles.numbers }>210</i>
          </div>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Plus />} />
            <i className={ styles.numbers }>5</i>
          </div>
          <div className={ styles.icon }>
            <Avatar size={24} color={ colors.icon } icon={<Comment />} />
            <i className={ styles.numbers }>9</i>
          </div>
        </div>
      </div>
      <div className={ styles.supplement }>
        <div className={ styles.avtor }>
          <Avatar size={30} src="static/img/smal.jpg" />
          <a>Дмитрий Смаль</a>
        </div>
        <div className={ styles.status }>
          Статус: <span className={ styles.statusValue } style={{ color: colors.success }}>сдано</span>
        </div>
        <div className={ styles.score }>
          Баллов: <span className={ styles.statusValue } style={{ color: colors.success }}>15/15</span>
        </div>
      </div>
    </Paper>
  </div>
);

export default Homework;
