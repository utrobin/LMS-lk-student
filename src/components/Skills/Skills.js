import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import LinePeoples from '../LinePeoples/LinePeoples';

import styles from './Skills.css';

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

export default class Skills extends React.Component {

  updateInput(event) {
    console.log(event)
  }

  render() {
    const { data, myPage } = this.props;

    return (
      <Paper className={ styles.skills } zDepth={1} >
        <span className={ styles.span }>Навыки:</span>
        <div>
          {
            data.data.map((el, i) =>
              <div className={ styles.skill } key={ i }>
                <Chip
                  className={ styles.chip }
                  onRequestDelete={ myPage === true ?  handleRequestDelete : undefined }
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
        <div>
          <AutoComplete
            floatingLabelText="Навык"
            filter={ AutoComplete.noFilter }
            openOnFocus={ true }
            dataSource={ data.dictionarySkills }
            onUpdateInput={ (e) => this.updateInput(e) }
          />
          <div className={ styles.button }>
            <RaisedButton label="Добавить навык" primary={true} fullWidth={true} />
          </div>
        </div>
      </Paper>
    )
  }
}
