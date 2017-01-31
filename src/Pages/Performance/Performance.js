import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import School from 'material-ui/svg-icons/social/school';

import styles from './Performance.css'

const Performance = () => (
  <Paper className={ styles.perfomance }>
    <div>
    <Table>
      <TableHeader
        adjustForCheckbox={ false }
        displaySelectAll={ false }
      >
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn>Java</TableHeaderColumn>
          <TableHeaderColumn>База данных</TableHeaderColumn>
          <TableHeaderColumn>Фронтенд</TableHeaderColumn>
          <TableHeaderColumn>Проект. интерфейсов</TableHeaderColumn>
          <TableHeaderColumn>Коммуникации</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={ false }
      >
        <TableRow>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn><i className={ styles.pointSuccess }>9/10</i></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn><i className={ styles.pointSuccess }>9/10</i></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn><i className={ styles.pointSuccess }>20/20</i></TableRowColumn>
          <TableRowColumn><i className={ styles.pointSuccess }>35/35</i></TableRowColumn>
          <TableRowColumn><i className={ styles.pointSuccess }>9/10</i></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn><i className={ styles.pointSuccess }>13/15</i></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>9</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>10</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn><School /></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>11</TableRowColumn>
          <TableRowColumn><School /></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn><School /></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
        </TableRow>
        <TableRow>
          <TableRowColumn>12</TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn><School /></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn></TableRowColumn>
          <TableRowColumn><School /></TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  </Paper>
);

export default Performance;
