import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import LinePeoples from '../LinePeoples/LinePeoples';
import CircularProgress from 'material-ui/CircularProgress';
import { FETCH_SKILLS_START } from '../../modules/skills/skills.constants';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { deleteSkillFetch, addSkillFetch } from '../../modules/skills/skills.actions';
import { toastr } from 'react-redux-toastr'

import styles from './Skills.css';

class Skills extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
      value: undefined
    };
  }

  getFormData() {
    const elements = this.form.elements;
    const fields = {};

    Object.keys(elements).forEach((element) => {
      const name = elements[element].name;
      const value = elements[element].value;

      if (!name) {
        return;
      }

      fields[name] = value;
    });

    return fields;
  }

  clearFormData() {
    const elements = this.form.elements;

    Object.keys(elements).forEach((element) => {
      const name = elements[element].name;

      if (!name) {
        return;
      }

     elements[element].value = '';
    });
  }

  handleOpen(value) {
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

  componentDidMount () {
    this.props.getSkills();
  }

  formSubmit = e => {
    e.preventDefault();

    const formData = this.getFormData();

    const replays = this.props.skills.data.value.data.every(el => {
      return el.value !== formData.skill
    });

    if (formData.skill === '') {
      return;
    }

    if (replays) {
      if(this.props.myPage) {
        const temp = Object.assign({}, formData);
        this.props.addSkill(temp);
      } else {
        const temp = Object.assign({}, formData, { count: 1, peoples: [{ img: this.props.auth.data.value.img, id: this.props.auth.data.value.id }] });
        this.props.addSkill(temp);
      }
    } else {
      toastr.error('Ошибка', 'Данный навык уже существует');
    }
  };

  updateInput(event) {
    console.log(event)
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
              <div className={ styles.skill } key={ i }>
                <Chip
                  className={ styles.chip }
                  onRequestDelete={ myPage === true ? this.handleOpen.bind(this, el.value) : undefined }
                >
                  <i className={ styles.i }>{ el.count }</i>
                  <span>{ el.value }</span>
                </Chip>
                <LinePeoples
                  data={ el.peoples }
                />
                <div className={ styles.divider }><Divider /></div>
              </div>
            )
          }
        </div>
        <form onSubmit={ this.formSubmit }  ref={ form => this.form = form }>
          <AutoComplete
            floatingLabelText="Навык"
            filter={ AutoComplete.noFilter }
            openOnFocus={ true }
            dataSource={ data.dictionarySkills }
            onUpdateInput={ (e) => this.updateInput(e) }
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
    auth: state.auth
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills)