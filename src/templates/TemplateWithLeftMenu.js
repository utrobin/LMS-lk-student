import React from 'react';

import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';

import '../total/reset/reset.css';
import styles from '../total/global/global.css';

export default class TemplateWithLeftMenu extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className={ styles.plugHeader }/>
        <div className={ styles.content }>
          <LeftMenu
            changePage={ this.changePages }
          />
          <div className={ styles.plugLeftMenu }/>
          { this.props.children }
        </div>
      </div>
    )
  }
};
