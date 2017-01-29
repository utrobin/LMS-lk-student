import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ActionAndroid from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import Search from 'material-ui/svg-icons/action/search';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Attachment from 'material-ui/svg-icons/file/attachment';
import Image from 'material-ui/svg-icons/image/image';
import Document from 'material-ui/svg-icons/action/description';
import Movie from 'material-ui/svg-icons/AV/movie';
import Audio from 'material-ui/svg-icons/Image/audiotrack';
import TextField from 'material-ui/TextField';
import Send from 'material-ui/svg-icons/content/send';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Siderbar/Sidebar';
import { colors } from '../../total/global/globalCSS';

import styles from './ChatHomework.css';

const ChatHomework = () => (
  <div className={ styles.chatHomework }>
    <Paper className={ styles.chat }>
      <div className={ styles.header }>
        <FlatButton
          label="Назад"
          primary={true}
          style={{ height: 48 }}
          icon={<ActionAndroid />}
        />

        <h2 className={ styles.h2 }>Задание на второй модуль</h2>

        <div className={ styles.icons }>
          <Search
            color={ colors.icon }
          />
          <IconMenu
            iconStyle={{ fill: colors.icon }}
            iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem leftIcon={<Attachment />} primaryText="Показать вложения" />
            <MenuItem leftIcon={<PersonAdd />} primaryText="Добавить наблюдателя" />
          </IconMenu>
          <Avatar size={30} src="static/img/step.jpg" className={ styles.avatar } />
        </div>
      </div>
      <Divider />
      <Chat />
      <Divider />
      <div className={ styles.sending }>
        <IconMenu
          iconButtonElement={<IconButton><Attachment /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
          iconStyle={{ fill: colors.icon }}
        >
          <MenuItem leftIcon={<Image />} primaryText="Фотография" />
          <MenuItem leftIcon={<Document />} primaryText="Документ" />
          <MenuItem leftIcon={<Movie />} primaryText="Видеозапись" />
          <MenuItem leftIcon={<Audio />} primaryText="Аудиозапись" />
        </IconMenu>
        <TextField
          hintText="Напишите сообщение"
          fullWidth={true}
          autoFocus="autofocus"
        />
        <Send
          color={ colors.icon }
          className={ styles.send }
        />
      </div>
    </Paper>
    <div className={ styles.sidebar }>
      <Sidebar />
    </div>
  </div>
);

export default ChatHomework;
