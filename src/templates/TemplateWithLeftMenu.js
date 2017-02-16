import React from 'react';
import ReduxToastr from 'react-redux-toastr'
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';

import '../total/reset/reset.css';
import styles from '../total/global/global.css';
import 'react-redux-toastr/src/styles/index.scss'

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
        <ReduxToastr
          timeOut={3000}
          newestOnTop={false}
          preventDuplicates={true}
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
      </div>
    )
  }
};
