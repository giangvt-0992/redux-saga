import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import TaskItem from '../TaskItem';

function TaskList(props) {
  const { status, taskFilter } = props;
  const { classes } = props;
  return (
    <Grid item md={4} xs={12} key={status.value}>
      <Box mt={2} mb={2}>
        <div className={classes.status}>{status.label}</div>
      </Box>
      <div className={classes.wrapperListTask}>
        {taskFilter.map((task, index) => {
          return <TaskItem key={index} task={task} />;
        })}
      </div>
    </Grid>
  );
}

export default withStyles(styles)(TaskList);
