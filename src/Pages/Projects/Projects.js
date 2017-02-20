import React from 'react';
import Paper from 'material-ui/Paper';
import Project from '../../components/Projects/Projects';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';
import { startGetProjects, startGetFilter, startStartUdpateFilter } from '../../modules/projects/projects.actions';
import { connect } from 'react-redux';

import styles from './Projects.css';

const dataSource = [
  'Шутер',
  'Фронтенд',
  'Клевый проект'
];

const Filter = ({ name, value, activeFilters, handleChange, valueFilters }) => (
  <SelectField
    floatingLabelText={ name }
    value={ activeFilters[value] }
    onChange={ (event, index, v) => handleChange(value, v) }
    maxHeight={300}
    style={{ width: 220 }}
  >
    {
      valueFilters.map((el, i) =>
        <MenuItem
          value={ el.value }
          primaryText={ el.name }
          key={ i }
        />
      )
    }
  </SelectField>
);

class Projects extends React.Component {

  componentDidMount () {
    this.props.getProjects();
    this.props.getFilters();
  }

  handleChange = (name, value) => {

    this.props.updateFilters({ [name]: value });
  };

  render() {
    const loadingProjects = this.props.projects.loading.value;
    const loadingFilters = this.props.projects.loadingFilter.value;
    const loadingUpdateFilters = this.props.projects.loadingUpdateFilter.value;

    const projects = this.props.projects.data.value;
    const filters = this.props.projects.filters;
    const activeFilters = this.props.projects.activeFilters;

    if (loadingProjects || loadingFilters) {
      return (
        <div className={ styles.loading }>
          <CircularProgress size={60} thickness={7} />
        </div>
      )
    }

    return (
      <div className={ styles.Projects }>
        <div className={ styles.main }>
          {
            loadingUpdateFilters === true ?
              <div className={ styles.loading }>
                <CircularProgress size={60} thickness={7} />
              </div>
              :
              <Project
                data={ projects }
              />
          }
          {/*<div className={ styles.pagination }>*/}
            {/*<RaisedButton label="Загрузить ещё" primary={true} />*/}
          {/*</div>*/}
        </div>
        <div className={ styles.wrapperRightBlock }>
          <Paper className={ styles.rightBlock }>
            <AutoComplete
              dataSource={dataSource}
              hintText="Набирайте"
              floatingLabelText="Введите тег или слово"
              fullWidth={true}
            />

            {
              filters.map((el, i) =>
                <Filter
                  activeFilters={ activeFilters }
                  name={ el.name }
                  value={ el.value }
                  handleChange={ this.handleChange }
                  valueFilters={ el.valueFilters }
                  key={ i }
                />
              )
            }

            <div className={ styles.button }>
              <RaisedButton label="Создать проект" primary={true} fullWidth={true}  />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: value => {
      dispatch(startGetProjects(value))
    },
    getFilters: value => {
      dispatch(startGetFilter(value))
    },
    updateFilters: value => {
      dispatch(startStartUdpateFilter(value))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
