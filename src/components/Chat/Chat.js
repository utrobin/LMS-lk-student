import React from 'react';
import Avatar from 'material-ui/Avatar';

import styles from './Chat.css';

const Chat = () => (
  <div className={ styles.chat }>
    <div>
      <div className={ styles.message }>
        <a><Avatar className={ styles.avatar } size={36} src="static/img/avatar.jpg" /></a>
        <div>
          <div className={ styles.title }>
            <a className={ styles.name }>Егор</a>
            <time className={ styles.timeMessage }>13:55</time>
          </div>
          <div className={ styles.text }>
            Хорошо, мы будем делать с Дмитрием.
          </div>
          <div className={ styles.text }>
            Спасибо.
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className={ styles.message }>
        <a><Avatar className={ styles.avatar } size={36} src="static/img/step.jpg" /></a>
        <div>
          <div className={ styles.title }>
            <a className={ styles.name }>Степан</a>
            <time className={ styles.timeMessage }>14:56</time>
          </div>
          <div className={ styles.text }>
            <div>Здравствуйте, Егор!</div>
            <div>Спасибо за информацию, группа зарегистрирована! С учётом Вашей принадлежности к группам предлагаю Вам поработать с Дмитрием. К сожалению, я физически не могу курировать все проекты :)</div>
            <div>Успехов!</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className={ styles.message }>
        <a><Avatar className={ styles.avatar } size={36} src="static/img/avatar.jpg" /></a>
        <div>
          <div className={ styles.title }>
            <a className={ styles.name }>Егор</a>
            <time className={ styles.timeMessage }>16:11</time>
          </div>
          <div className={ styles.text }>Добрый день.</div>
          <div className={ styles.text }>
            <div>Команда для проекта:</div>
            <div>Руднев Иван</div>
            <div>Утобин Егор</div>
          </div>
          <div className={ styles.text }>
            Название команды - Atom
          </div>
        </div>
      </div>
    </div>

    <div className={ styles.whenWritten}>
      сегодня
    </div>
  </div>
);

export default Chat;
