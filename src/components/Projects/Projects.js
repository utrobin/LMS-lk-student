import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Comment from 'material-ui/svg-icons/communication/comment';
import Plus from 'material-ui/svg-icons/image/exposure-plus-1';
import Visibility from 'material-ui/svg-icons/action/visibility';
import { colors } from '../../total/global/globalCSS';

import styles from './Projects.css';

const Projects = () => (
  <div className={ styles.projects }>
    <Paper zDepth={1} className={ styles.project }>
      <div className={ styles.plug } />
      <div className={ styles.background } style={{backgroundImage: `url('static/img/project.png')`}} />
      <div className={ styles.people }>
        <Avatar size={30} src="static/img/2.jpg" />
        <Avatar size={30} src="static/img/1.jpg" />
        <Avatar size={30} src="static/img/2.jpg" />
        <Avatar size={30} src="static/img/3.jpg" />
      </div>

      <a href="#"><Avatar size={30} className={ styles.github } style={{ backgroundColor: '#fff' }} src="static/img/github.svg" icon={<Comment />} /></a>

      <div className={ styles.content }>
        <h4 className={ styles.h4 }>Technoshooter (3D игра шутер)</h4>
        <span className={ styles.span }>Проект на 2 семестр по предметам: Фронтенд, Углубленное программирование на Java, Проектирование интерфейсов.</span>
        <div className={ styles.tags }>
          <a>#React</a><a>#Materia design</a><a>#Spring</a><a>#3D</a><a>#Шутер</a>
        </div>
        <Divider />
        <div className={ styles.supplement }>
          <span className={ styles.status }>Статус: <i className={ styles.statusColor }>проект закончен</i> - </span>
          <a className={ styles.a }>javajava.ru</a>
          <div className={ styles.iconsWrapper }>
            <div className={ styles.icons }>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
                <i className={ styles.numbers }>345</i>
              </div>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Plus />} />
                <i className={ styles.numbers }>21</i>
              </div>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Comment />} />
                <i className={ styles.numbers }>7</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
    <Paper zDepth={1} className={ styles.project }>
      <div className={ styles.plug } />
      <div className={ styles.background } style={{backgroundImage: `url('static/img/project.png')`}} />
      <div className={ styles.people }>
        <Avatar size={0} src="static/img/2.jpg" />
        <Avatar size={30} src="static/img/1.jpg" />
        <Avatar size={30} src="static/img/2.jpg" />
        <Avatar size={30} src="static/img/3.jpg" />
      </div>

      <a href="#"><Avatar size={30} className={ styles.github } style={{ backgroundColor: '#fff' }} src="static/img/github.svg" icon={<Comment />} /></a>

      <div className={ styles.content }>
        <h4 className={ styles.h4 }>Technoshooter (3D игра шутер)</h4>
        <span className={ styles.span }>Проект на 2 семестр по предметам: Фронтенд, Углубленное программирование на Java, Проектирование интерфейсов.</span>
        <div className={ styles.tags }>
          <a>#React</a><a>#Materia design</a><a>#Spring</a><a>#3D</a><a>#Шутер</a>
        </div>
        <Divider />
        <div className={ styles.supplement }>
          <span className={ styles.status }>Статус: <i className={ styles.statusColor }>проект закончен</i> - </span>
          <a className={ styles.a }>javajava.ru</a>
          <div className={ styles.iconsWrapper }>
            <div className={ styles.icons }>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
                <i className={ styles.numbers }>345</i>
              </div>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Plus />} />
                <i className={ styles.numbers }>21</i>
              </div>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Comment />} />
                <i className={ styles.numbers }>7</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
    <Paper zDepth={1} className={ styles.project }>
      <div className={ styles.plug } />
      <div className={ styles.background } style={{backgroundImage: `url('static/img/project.png')`}} />
      <div className={ styles.people }>
        <Avatar size={30} src="static/img/2.jpg" />
        <Avatar size={30} src="static/img/1.jpg" />
        <Avatar size={30} src="static/img/2.jpg" />
        <Avatar size={30} src="static/img/3.jpg" />
      </div>

      <a href="#"><Avatar size={30} className={ styles.github } style={{ backgroundColor: '#fff' }} src="static/img/github.svg" icon={<Comment />} /></a>

      <div className={ styles.content }>
        <h4 className={ styles.h4 }>Technoshooter (3D игра шутер)</h4>
        <span className={ styles.span }>Проект на 2 семестр по предметам: Фронтенд, Углубленное программирование на Java, Проектирование интерфейсов.</span>
        <div className={ styles.tags }>
          <a>#React</a><a>#Materia design</a><a>#Spring</a><a>#3D</a><a>#Шутер</a>
        </div>
        <Divider />
        <div className={ styles.supplement }>
          <span className={ styles.status }>Статус: <i className={ styles.statusColor }>проект закончен</i> - </span>
          <a className={ styles.a }>javajava.ru</a>
          <div className={ styles.iconsWrapper }>
            <div className={ styles.icons }>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
                <i className={ styles.numbers }>345</i>
              </div>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Plus />} />
                <i className={ styles.numbers }>21</i>
              </div>
              <div className={ styles.icon }>
                <Avatar size={24} color={ colors.icon } icon={<Comment />} />
                <i className={ styles.numbers }>7</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  </div>
);

export default Projects;
