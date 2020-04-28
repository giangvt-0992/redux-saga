import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './style';
import TaskBoard from '../Taskboard';
import { Provider } from "react-redux";
import configureStore from '../../redux/configureStore';

const store = configureStore();

function App(props) {
  const { classes } = props;
  return (
    <Provider store={store}>
      <div className="App">
        <TaskBoard />
      </div>
    </Provider>
  );
}

export default withStyles(styles)(App);
