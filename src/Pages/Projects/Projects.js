import React from 'react';
import Paper from 'material-ui/Paper';
import Project from '../../components/Projects/Projects';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';
import { FETCH_PROJECTS_START } from '../../modules/projects/projects.constants';
import { connect } from 'react-redux';

import styles from './Projects.css';

const dataSource = [
  'Шутер',
  'Фронтенд',
  'Клевый проект'
];

class Projects extends React.Component {
  constructor () {
    super();

    this.state = {
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 1,
      value5: 1,
    };
  }

  componentDidMount () {
    this.props.getProjects();
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    console.log(event, index, value)
  };

  render() {
    const loadingProjects  = this.props.projects.loading.value;

    const projects = this.props.projects.data.value;

    if (loadingProjects) {
      return (
        <div className={ styles.loading }>
          <CircularProgress size={60} thickness={7} />
        </div>
      )
    }

    return (
      <div className={ styles.Projects }>
        <div className={ styles.main }>
          <Project
            data={ projects }
          />
          <div className={ styles.pagination }>
            <RaisedButton label="Загрузить ещё" primary={true} />
          </div>
        </div>
        <div className={ styles.wrapperRightBlock }>
          <Paper className={ styles.rightBlock }>
            <AutoComplete
              dataSource={dataSource}
              hintText="Набирайте"
              floatingLabelText="Введите тег или слово"
              fullWidth={true}
            />

            <SelectField
              floatingLabelText="Образовательный проект"
              value={this.state.value1}
              onChange={this.handleChange}
              style={{ width: 220 }}
            >
              <MenuItem value={1} primaryText="Все" />
              <MenuItem value={2} primaryText="Технопарк" />
              <MenuItem value={3} primaryText="Техносфера" />
              <MenuItem value={4} primaryText="Технотрэк" />
              <MenuItem value={5} primaryText="Техноатом" />
              <MenuItem value={6} primaryText="Технополис" />
            </SelectField>

            <SelectField
              floatingLabelText="Курс или предмет"
              value={this.state.value2}
              onChange={this.handleChange}
              style={{ width: 220 }}
            >
              <MenuItem value={1} primaryText="Все" />
              <MenuItem value={2} primaryText="Web-технологии" />
              <MenuItem value={3} primaryText="АИСД" />
              <MenuItem value={4} primaryText="Углуб. програм. на C/C++" />
              <MenuItem value={5} primaryText="Углуб. програм. на Java" />
              <MenuItem value={6} primaryText="Фронтенд разработка" />
              <MenuItem value={7} primaryText="Проектирование интерфейсов" />
              <MenuItem value={8} primaryText="Мобильная разработка" />
              <MenuItem value={9} primaryText="Выпускной проект" />
              <MenuItem value={10} primaryText="Linux" />
              <MenuItem value={11} primaryText="Разработка приложений на iOS" />
            </SelectField>

            <SelectField
              floatingLabelText="Статус"
              value={this.state.value3}
              onChange={this.handleChange}
              style={{ width: 220 }}
            >
              <MenuItem value={1} primaryText="Не выбран" />
              <MenuItem value={2} primaryText="В разработке" />
              <MenuItem value={3} primaryText="Завершенн" />
              <MenuItem value={4} primaryText="В поиске команды" />
            </SelectField>

            <SelectField
              floatingLabelText="Сортировать по:"
              value={this.state.value4}
              onChange={this.handleChange}
              style={{ width: 220 }}
            >
              <MenuItem value={1} primaryText="Рейтингу" />
              <MenuItem value={2} primaryText="Новизне" />
              <MenuItem value={3} primaryText="Кол-ву комментариев" />
            </SelectField>

            <SelectField
              floatingLabelText="Дата создания"
              value={this.state.value5}
              onChange={this.handleChange}
              style={{ width: 220 }}
            >
              <MenuItem value={1} primaryText="2014" />
              <MenuItem value={2} primaryText="2015" />
              <MenuItem value={3} primaryText="2016" />
              <MenuItem value={3} primaryText="2017" />
            </SelectField>

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
    getProjects: () => {
      dispatch({ type: FETCH_PROJECTS_START })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
