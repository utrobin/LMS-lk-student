import React from 'react';
import Info from '../../components/Info/Info';
import Avatar from '../../components/Avatar/Avatar';
import Achievements from '../../components/Achievements/Achievements';
import Friends from '../../components/Friends/Friends';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Projects from '../../components/Projects/Projects';
import CircularProgress from 'material-ui/CircularProgress';
import { startGetProfile } from '../../modules/profile/profile.actions';
import { startGetFriends } from '../../modules/friends/friends.actions';
import { startGetProjects } from '../../modules/projects/projects.actions';
import { connect } from 'react-redux';
import RoutesMap from '../../RoutesMap/RoutesMap';

import styles from './Profile.css';

class Profile extends React.Component {

  componentDidMount () {
    const login = this.props.location.pathname.slice(RoutesMap.profile.length + 1);

    this.props.getProfile(login);
    this.props.getFriends(login);
    this.props.getProjects({ author: login });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const login = nextProps.location.pathname.slice(RoutesMap.profile.length + 1);

      this.props.getProfile(login);
      this.props.getFriends(login);
      this.props.getProjects({ author: login });
    }
  }

  render() {
    const loadingProfile  = this.props.profile.loading.value;
    const loadingFriends  = this.props.friends.loading.value;
    const loadingProjects  = this.props.projects.loading.value;

    const profile = this.props.profile.info.value;
    const friends = this.props.friends.data.value;
    const projects = this.props.projects.data.value;

    if (loadingProfile || loadingFriends || loadingProjects) {
      return (
        <div className={ styles.loading }>
          <CircularProgress size={60} thickness={7} />
        </div>
      )
    }

    return (
      <div className={ styles.myPage }>
        <div className={ styles.main }>
          { console.log(this.props) }
          <Info
            info={ profile.info }
            myPage={ profile.info.myPage }
          />
          <Education
            education={ profile.education }
          />
          <Skills
            myPage={ profile.info.myPage }
            location={ this.props.location }
          />
          <h3 className={ styles.h3 }>Проекты</h3>
          <Projects
            data={ projects }
          />
        </div>
        <div className={ styles.rightBlock }>
          <Avatar
            img={ profile.avatar }
            myPage={ profile.info.myPage }
          />
          <Achievements
            data={ profile.achievements }
          />
          <Friends
            data={ friends }
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    friends: state.friends,
    projects: state.projects,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: value => {
      dispatch(startGetProfile(value))
    },
    getFriends: value => {
      dispatch(startGetFriends(value))
    },
    getProjects: value => {
      dispatch(startGetProjects(value))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
