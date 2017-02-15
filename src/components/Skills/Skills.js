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
import { deleteSkillFetch } from '../../modules/skills/skills.actions';

import styles from './Skills.css';

class Skills extends React.Component {

  constructor() {
    super();

    this.state = {
      open: false,
      idRemoval: undefined
    };
  }

  handleOpen(id) {
    this.setState({
      open: true,
      idRemoval: id
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  deleteSkill = () => {
    this.props.deleteSkill(this.state.idRemoval);
    this.handleClose();
  };

  componentDidMount () {
    this.props.getSkills();
  }

  updateInput(event) {
    console.log(event)
  }

  render() {
    const loadingSkills  = this.props.skills.loading.value;

    if (loadingSkills) {
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
                  onRequestDelete={ myPage === true ? this.handleOpen.bind(this, el.id) : undefined }
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
        <form onSubmit={(e) => e.preventDefault() }>
          <AutoComplete
            floatingLabelText="Навык"
            filter={ AutoComplete.noFilter }
            openOnFocus={ true }
            dataSource={ data.dictionarySkills }
            onUpdateInput={ (e) => this.updateInput(e) }
          />
          <div className={ styles.button }>
            <RaisedButton
              type="submit"
              label="Добавить навык"
              primary={true}
              fullWidth={true}
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
    skills: state.skills
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getSkills: () => {
      dispatch({ type: FETCH_SKILLS_START })
    },
    deleteSkill: id => {
      dispatch(deleteSkillFetch(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills)