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

const st = {
  fontSize: '14px'
};

const LeftMenu = ({ changePage }) => (
  <div className={ styles.menu }>
    <List>
      <ListItem style={ st } primaryText="Моя страница" onTouchTap={ () => changePage(0) } leftIcon={<Home color={ colors.icon } />} />
      <ListItem
        style={ st }
        primaryText={`Домашние задания и РК`}
        onTouchTap={ () => changePage(1) }
        leftIcon={<School color={ colors.icon } />}
      />
      <ListItem style={ st } primaryText="Проекты" onTouchTap={ () => changePage(4) } leftIcon={<Work color={ colors.icon } />} />
      <ListItem style={ st } primaryText="Друзья" leftIcon={<People color={ colors.icon } />} />
      <ListItem style={ st } primaryText="Сообщения" leftIcon={<Chat color={ colors.icon } />} />
      <ListItem style={ st } primaryText="Расписание" leftIcon={<Schedule color={ colors.icon } />} />
      <ListItem style={ st } primaryText="Успеваемость" onTouchTap={ () => changePage(3) } leftIcon={<Timeline color={ colors.icon } />} />
      <ListItem style={ st } primaryText="Посещаемость" leftIcon={<Event color={ colors.icon } />} />
    </List>
    <Divider />
    <List>
      <ListItem style={ st } primaryText="Настройки" rightIcon={<Settings color={ colors.icon } />} />
      <ListItem style={ st } primaryText="Обратная связь" rightIcon={<ActionInfo color={ colors.icon } />} />
    </List>
  </div>
);

export default LeftMenu;
