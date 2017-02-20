import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Comment from 'material-ui/svg-icons/communication/comment';
import Plus from 'material-ui/svg-icons/image/exposure-plus-1';
import Visibility from 'material-ui/svg-icons/action/visibility';
import { colors } from '../../total/global/globalCSS';
import RoutesMap from '../../RoutesMap/RoutesMap';
import { Link } from 'react-router'

import styles from './Projects.css';

const Subjects = ({ subjects, label }) => (
  <span className={ styles.span }>
    { label } { subjects.map((el, i) =>
        <span key={ i }>{ el } { subjects.length === i + 1 ? '' : ','} </span>
      )
    }
  </span>
);

const Team = ({ peoples }) => (
  <div className={ styles.people }>
    {
      peoples.map((el, i) =>
        <Link to={ `${RoutesMap.profile}/${el.login}` } key={ i }>
          <Avatar size={30} src={ el.img } />
        </Link>
      )
    }
  </div>
);

const Tags = ({ tags }) => (
  <div className={ styles.tags }>
    {
      tags.map((el, i) =>
        <a href={ el.link } key={ i }>#{ el.value }</a>
      )
    }
  </div>
);

const Projects = ({ data }) => (
  <div className={ styles.projects }>
    {
      data.map((el, i) =>
        <Paper zDepth={1} className={ styles.project } key={ i }>
          <div className={ styles.plug } />
          <div className={ styles.background } style={{backgroundImage: `url('${el.img}')`}} />

          <Team
            peoples={ el.team }
          />

          {
            el.github === null ? '' :
            <a href={ el.github }><Avatar size={30} className={ styles.github } style={{backgroundColor: '#fff'}}
                                          src='/static/img/github.svg' icon={<Comment />}/></a>
          }

          <div className={ styles.content }>
            <h4 className={ styles.h4 }>{el.title}</h4>
            <Subjects
              label={ el.descreption.label }
              subjects={ el.descreption.subjects }
            />
            <Tags
              tags={ el.tags }
            />
            <Divider />
            <div className={ styles.supplement }>
              <span className={ styles.status }>
                Статус: <i className={ styles.statusColor }>{ el.status.value }</i>{ el.status.site === null ? '' : ' - ' }
              </span>
              { el.status.site === null ? '' : <a className={ styles.a }>javajava.ru</a> }
              <div className={ styles.iconsWrapper }>
                <div className={ styles.icons }>
                  <div className={ styles.icon }>
                    <Avatar size={24} color={ colors.icon } icon={<Visibility />} />
                    <i className={ styles.numbers }>{ el.views }</i>
                  </div>
                  <div className={ styles.icon }>
                    <Avatar size={24} color={ colors.icon } icon={<Plus />} />
                    <i className={ styles.numbers }>{ el.like }</i>
                  </div>
                  <div className={ styles.icon }>
                    <Avatar size={24} color={ colors.icon } icon={<Comment />} />
                    <i className={ styles.numbers }>{ el.comments }</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      )
    }
  </div>
);

export default Projects;
