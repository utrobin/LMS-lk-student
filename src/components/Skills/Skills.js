import React from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { FETCH_SKILLS_START } from '../../modules/skills/skills.constants';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import Skill from '../Skill/Skill';
import { deleteSkillFetch, addSkillFetch, addVoiceFetch, deleteVoiceFetch } from '../../modules/skills/skills.actions';
import { toastr } from 'react-redux-toastr'
import RoutesMap from '../../RoutesMap/RoutesMap';

import styles from './Skills.css';

class Skills extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
      value: undefined,
      formSkill: ''
    };
  }

  componentDidMount () {
    this.props.getSkills();
  }

  handleOpen = value => {
    this.setState({
      open: true,
      value
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteSkill = () => {
    this.props.deleteSkill(this.state.value);
    this.handleClose();
  };

  addVoice = value => {
    const login = this.props.location.pathname.slice(RoutesMap.profile.length + 1);

    this.props.addVoice({ value, login });
  };

  deleteVoice = value => {
    const login = this.props.location.pathname.slice(RoutesMap.profile.length + 1);

    this.props.deleteVoice({ value, login });
  };

  formSubmit = e => {
    e.preventDefault();

    const formData = { skill: this.state.formSkill };

    const replays = this.props.skills.data.value.data.every(el => {
      return el.value !== formData.skill
    });

    if (formData.skill === '') {
      return;
    }

    if (replays) {
      this.setState({ formSkill: '' });
      console.log(this.state.formSkill);

      if(this.props.myPage) {
        const temp = Object.assign({}, formData, { author: this.props.auth.data.value.login });
        this.props.addSkill(temp);
      } else {
        const temp = Object.assign({}, formData, {
          count: 1,
          author: this.props.auth.data.value.login,
          peoples: [{ img: this.props.auth.data.value.img, login: this.props.auth.data.value.login }]
        });
        this.props.addSkill(temp);
      }
    } else {
      toastr.error('Ошибка', 'Данный навык уже существует');
    }
  };

  updateInput(event) {
    this.setState({ formSkill: event });
  }

  render() {
    const loadingSkills  = this.props.skills.loading.value;
    const loadingAuth  = this.props.auth.loading.value;

    if (loadingSkills || loadingAuth) {
      return (
        <Paper className={ styles.skills } zDepth={1} >
          <span className={ styles.span }>Навыки:</span>
          <div className={ styles.loading }>
            <CircularProgress size={60} thickness={7} />
          </div>
        </Paper>
      )
    }

    const data = this.props.skills.data.value;
    const { myPage } = this.props;

    const actions = [
      <FlatButton
        label="Отменить"
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ this.handleClose }
      />,
      <FlatButton
        label="Удалить"
        secondary={ true }
        onTouchTap={ this.deleteSkill }
      />,
    ];

    return (
      <Paper className={ styles.skills } zDepth={1} >
        <span className={ styles.span }>Навыки:</span>
        <div>
          {
            data.data.map((el, i) =>
              <Skill
                myPage={ myPage }
                value={ el.value }
                count={ el.count }
                peoples={ el.peoples }
                vote={ el.vote }
                key={ i }
                handleOpen={ this.handleOpen }
                addVoice={ this.addVoice }
                deleteVoice={ this.deleteVoice }
              />
            )
          }
        </div>
        <form onSubmit={ this.formSubmit  }  ref={ form => this.form = form }>
          <AutoComplete
            floatingLabelText="Навык"
            filter={ AutoComplete.noFilter }
            openOnFocus={ true }
            dataSource={ data.dictionarySkills }
            onUpdateInput={ (e) => this.updateInput(e) }
            searchText={ this.state.formSkill }
            name="skill"
          />
          <div className={ styles.button } >
            <RaisedButton
              type="submit"
              label="Добавить навык"
              primary={true}
              fullWidth={true}
              onTouchTap={ this.formSubmit }
            />
          </div>
        </form>
        <Dialog
          title="Подтверждение"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Вы действительно хотите удалить этот навык?
        </Dialog>
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  return {
    skills: state.skills,
    auth: state.auth,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getSkills: () => {
      dispatch({ type: FETCH_SKILLS_START })
    },
    deleteSkill: id => {
      dispatch(deleteSkillFetch(id))
    },
    addSkill: data => {
      dispatch(addSkillFetch(data))
    },
    addVoice: value => {
      dispatch(addVoiceFetch(value))
    },
    deleteVoice: value => {
      dispatch(deleteVoiceFetch(value))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills)
