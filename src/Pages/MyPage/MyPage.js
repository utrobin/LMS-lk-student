import React from 'react';
import Info from '../../components/Info/Info';
import Avatar from '../../components/Avatar/Avatar';
import Achievements from '../../components/Achievements/Achievements';
import Friends from '../../components/Friends/Friends';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Projects from '../../components/Projects/Projects';
import { FETCH_PROFILE_START } from '../../modules/profile/profile.constants';
import { FETCH_FRIENDS_START } from '../../modules/friends/friends.constants';
import { FETCH_PROJECTS_START } from '../../modules/projects/projects.constants';
import { connect } from 'react-redux';

import styles from './MyPage.css';

class MyPage extends React.Component {

  componentDidMount () {
    this.props.getProfile();
    this.props.getFriends();
    this.props.getProjects();
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
        <div>Загрузка</div>
      )
    }

    return (
      <div className={ styles.myPage }>
        <div className={ styles.main }>
          { console.log(this.props) }
          <Info
            info={ profile.info }
          />
          <Education
            education={ profile.education }
          />
          <Skills />
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
    getProfile: () => {
      dispatch({ type: FETCH_PROFILE_START })
    },
    getFriends: () => {
      dispatch({ type: FETCH_FRIENDS_START })
    },
    getProjects: () => {
      dispatch({ type: FETCH_PROJECTS_START })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
