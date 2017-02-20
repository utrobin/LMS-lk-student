import { combineReducers } from 'redux';
import { FETCH_SKILLS_SUCCESS, FETCH_SKILLS_LOADING, DELETE_SKILLS_START,
  ADD_SKILL_START, ADD_VOICE_START, DELETE_VOICE_START } from './skills.constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SKILLS_START:
      return (() => {
        const value = action.value;

        const newSkills = state.value.data.filter(el => el.value !== value);

        const newState = Object.assign({}, state);
        newState.value.data = newSkills;

        return newState;
      })();
    case ADD_SKILL_START:
      return (() => {
        let { skill: value, count = 0, peoples = [], author } = action.value;

        if (value.length > 12) {
          value = value.slice(0, 22);
          value += '...';
        }

        const skill = {
          value: value,
          count,
          id: null,
          peoples,
          author
        };

        const newState = Object.assign({}, state);
        newState.value.data.push(skill);

        return newState;
      })();
    case ADD_VOICE_START:
      return (() => {
        const { img, value, login } = action.value;

        const newState = Object.assign({}, state);

        newState.value.data = newState.value.data.map(el => {
          if (value === el.value) {
            el.peoples.push({ img: img, login: login });

            return {
              value: value,
              count: ++el.count,
              vote: false,
              peoples: el.peoples,
              id: el.id,
              author: el.author
            };
          } else
            return el;
        });

        return newState;
      })();
    case DELETE_VOICE_START:
      return (() => {
        const { img, value, login } = action.value;

        const newState = Object.assign({}, state);

        let temp1;

        newState.value.data = newState.value.data.map((el, i) => {
          if (value === el.value) {
            if (el.peoples.length === 1 && el.author === login) {
              temp1 = i;
              return el;
            }

            let temp2;

            el.peoples.forEach((el, i) => {
              if (login === el.login) {
                temp2 = i;
              }
            });

            if (temp2 !== undefined) {
              delete el.peoples[temp2];
            }

            return {
              value: value,
              count: --el.count,
              vote: true,
              peoples: el.peoples,
              id: el.id,
              author: el.author
            };
          } else
            return el;
        });

        if (temp1 !== undefined) {
          delete newState.value.data[temp1];
        }

        return newState;
      })();
    case FETCH_SKILLS_SUCCESS:
      return action;
    default:
      return state
  }
};

const loading  = (state = {value: true}, action) => {
  switch (action.type) {
    case FETCH_SKILLS_LOADING:
      return action;
    default:
      return state
  }
};

export const skills = combineReducers({
  data,
  loading
});
