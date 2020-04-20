import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './style';

function App(props) {
  const { classes } = props;
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <div className={classes.box}>
        <div className={classes.shape}>Reactjs</div>
        <div className={classes.shape}>Vuejs</div>
        <div className={classes.shape}>AngularJS</div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
