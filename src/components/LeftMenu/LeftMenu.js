import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Home from 'material-ui/svg-icons/action/home';
import Settings from 'material-ui/svg-icons/action/settings';
import Timeline from 'material-ui/svg-icons/action/timeline';
import Work from 'material-ui/svg-icons/action/work';
import Chat from 'material-ui/svg-icons/communication/chat';
import People from 'material-ui/svg-icons/social/people';
import School from 'material-ui/svg-icons/social/school';
import Schedule from 'material-ui/svg-icons/action/schedule';
import Event from 'material-ui/svg-icons/notification/event-available';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { colors } from '../total/global/globalCSS';

import styles from './LeftMenu.css';

const LeftMenu = () => (
  <div className={ styles.menu }>
    <List>
      <ListItem primaryText="Моя страница" leftIcon={<Home color={ colors.black } />} />
      <ListItem primaryText="Домашние задания и РК" leftIcon={<School color={ colors.black } />} />
      <ListItem primaryText="Проекты" leftIcon={<Work color={ colors.black } />} />
      <ListItem primaryText="Друзья" leftIcon={<People color={ colors.black } />} />
      <ListItem primaryText="Сообщения" leftIcon={<Chat color={ colors.black } />} />
      <ListItem primaryText="Расписание" leftIcon={<Schedule color={ colors.black } />} />
      <ListItem primaryText="Успеваемость" leftIcon={<Timeline color={ colors.black } />} />
      <ListItem primaryText="Посещаемость" leftIcon={<Event color={ colors.black } />} />
    </List>
    <Divider />
    <List>
      <ListItem primaryText="Настройки" rightIcon={<Settings color={ colors.black } />} />
      <ListItem primaryText="Обратная связь" rightIcon={<ActionInfo color={ colors.black } />} />
    </List>
  </div>
);

export default LeftMenu;
