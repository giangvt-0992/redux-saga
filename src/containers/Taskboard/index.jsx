import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';
import { STATUSES } from '../../constants/index';
import Grid from '@material-ui/core/Grid';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

TaskBoard.propTypes = {};

const listTask = [
  {
    id: 1,
    title: 'Read hook',
    description: 'Read material',
    status: 0,
  },
  {
    id: 2,
    title: 'play football',
    description: 'with my friend',
    status: 1,
  },
  {
    id: 3,
    title: 'play tft',
    description: 'with my friend',
    status: 2,
  },
];

function TaskBoard(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFilter = listTask.filter((task) => {
            return task.status === status.value;
          });
          return (
            <TaskList
              key={index}
              listTask={listTask}
              taskFilter={taskFilter}
              status={status}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };
  const rederForm = () => {
    return <TaskForm openForm={openForm} closeForm={closeForm} open={open} />;
  };
  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.Button}
        onClick={() => setOpen(true)}
      >
        <AddIcon /> Thêm mới công việc
      </Button>
      {renderBoard()}
      {rederForm()}
    </div>
  );
}

export default withStyles(styles)(TaskBoard);
