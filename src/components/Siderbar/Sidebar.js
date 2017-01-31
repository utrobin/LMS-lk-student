import React from 'react';
import Paper from 'material-ui/Paper';
import School from 'material-ui/svg-icons/social/school';
import Bookmark from 'material-ui/svg-icons/action/bookmark-border';
import Person from 'material-ui/svg-icons/social/person';
import Mood from 'material-ui/svg-icons/social/mood';
import Group from 'material-ui/svg-icons/social/group';
import Alarm from 'material-ui/svg-icons/action/alarm-on';
import Points from 'material-ui/svg-icons/image/exposure-plus-1';
import Work from 'material-ui/svg-icons/action/work';
import { colors } from '../../total/global/globalCSS';

import styles from './Sidebar.css';

const Sidebar = () => (
  <div className={ styles.wrapperSidebar }>
    <Paper className={ styles.sidebar }>
      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <School
              color={ colors.secondIcon }
            />
          </div>
          <span>Предмет:</span>
        </div>
        <a>Алгоритмы и структуры данных</a>
      </div>

      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <Bookmark
              color={ colors.secondIcon }
            />
          </div>
          <span>Задание:</span>
        </div>
        <a>Задание на второй модуль</a>
      </div>

      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <Person
              color={ colors.secondIcon }
            />
          </div>
          <span>Проверяющий:</span>
        </div>
        <a>Степан Мацкевич</a>
      </div>

      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <Mood
              color={ colors.secondIcon }
            />
          </div>
          <span>Студент:</span>
        </div>
        <a>Утробин Егор</a>
      </div>

      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <Group
              color={ colors.secondIcon }
            />
          </div>
          <span>Наблюдатели:</span>
        </div>
        <span>Отсутствуют</span>
      </div>

      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <Work
              color={ colors.secondIcon }
            />
          </div>
          <span>Статус:</span>
        </div>
        <span className={ styles.status }>Сдано</span>
      </div>

      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <Points
              color={ colors.secondIcon }
            />
          </div>
          <span>Баллы:</span>
        </div>
        <span className={ styles.status }>14/15</span>
      </div>

      <div className={ styles.item }>
        <div className={ styles.label }>
          <div className={ styles.icon }>
            <Alarm
              color={ colors.secondIcon }
            />
          </div>
          <span>Дедлайн:</span>
        </div>
        <span className={ styles.status }>21 ноября 2016г.</span>
      </div>
    </Paper>
  </div>
);

export default Sidebar;
