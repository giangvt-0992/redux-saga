import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';
import { STATUSES } from '../../constants/index';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import * as TaskActions from '../../actions/task';
import { connect } from 'react-redux';

TaskBoard.propTypes = {};

// const listTask = [
//   {
//     id: 1,
//     title: 'Read hook',
//     description: 'Read material',
//     status: 0,
//   },
//   {
//     id: 2,
//     title: 'play football',
//     description: 'with my friend',
//     status: 1,
//   },
//   {
//     id: 3,
//     title: 'play tft',
//     description: 'with my friend',
//     status: 2,
//   },
// ];

function TaskBoard(props) {
  const { classes, tasks } = props;
  const { listTask } = tasks;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { taskActions } = props;
    const { fetchListTask } = taskActions;
    fetchListTask();
    return () => {
      
    };
  }, []);

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
  const render = () => {
    return <TaskForm openForm={openForm} closeForm={closeForm} open={open} />;
  };

  const showToast = () => {
    alert('a');
    // toast.success('Success');
  }
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
      {/* <Box ml="1"> */}
        <Button 
        variant="contained"

        onClick={showToast}>
        toast
        </Button>
      {/* </Box> */}
      { listTask.length > 0 && renderBoard()}
      {render()}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    tasks: store.task
  }
};

const mapDispatchToProps = dispatch => {
  return {
    taskActions: bindActionCreators(TaskActions, dispatch),
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
