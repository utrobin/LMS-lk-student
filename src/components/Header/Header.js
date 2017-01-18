import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Keyboard from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Avatar from 'material-ui/Avatar';
import { colors } from '../total/global/globalCSS';

import styles from './Header.css';

const stylesJs = {
  a: {
    color: colors.white
  },
  menu: {
    float: 'right',
    marginTop: 64,
  },
  avatarLabel: {
    textTransform: 'capitalize',
  }
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueSingle: '3',
      valueMultiple: ['3', '5'],
    };

    this.handleOnRequestChange = this.handleOnRequestChange.bind(this);
  }

  handleOpenMenu() {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange(value) {
    this.setState({
      openMenu: value,
    });
  }

  render() {
    return (
      <header className={ styles.wrapper }>
        <div className={ styles.header }>
          <img className={ styles.logo } src="static/img/logo.png" width="126" height="55" alt="logo"/>

          <IconMenu
            iconButtonElement={<IconButton></IconButton>}
            open={this.state.openMenu}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            onRequestChange={ this.handleOnRequestChange }
            className={ styles.dropdownMenu  }
            style={ stylesJs.menu }
            iconStyle={{ width: 0, height: 0 }}
          >
            <MenuItem value="1" primaryText="Моя страница" />
            <MenuItem value="3" primaryText="Настройки" />
            <MenuItem value="4" primaryText="Выйти" />
          </IconMenu>
          <div
            className={ styles.avatar }
            onTouchTap={() => this.handleOpenMenu() }
          >
            <FlatButton
              label="Егор"
              labelPosition="before"
              className={styles.button}
              icon={
                <div className={ styles.icons }>
                  <Avatar src="static/img/avatar.jpg" />
                  <Keyboard
                    color={ this.state.openMenu ? colors.white : colors.grey }
                    style={{ paddingTop: 12, paddingLeft: 2, height: 18, width: 18 }}
                  />
                </div>
              }
              style={{
                height: 64,
                color: colors.white,
                backgroundColor: this.state.openMenu ? colors.greyHover : ''
              }}
              labelStyle={ stylesJs.avatarLabel }
            />
          </div>

          <nav>
            <ul className={ styles.menu }>
              <FlatButton style={ stylesJs.a } label="Блоги"/>
              <FlatButton style={ stylesJs.a } label="Люди"/>
              <FlatButton style={ stylesJs.a } label="Программа"/>
              <FlatButton style={ stylesJs.a } label="Выпуски"/>
              <FlatButton style={ stylesJs.a } label="Вакансии"/>
              <FlatButton style={ stylesJs.a } label="Памятка"/>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
