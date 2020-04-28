import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Icon, Fab } from '@material-ui/core';
function TaskList(props) {
  const { task } = props;
  const { classes } = props;
  const { title, status } = task;
  return (
    <Card key={task.id} className={classes.Card}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography component="h2">{title}</Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          className={classes.fab}
        >
          <Icon fontSize="small">edit</Icon>
        </Fab>
        <Fab
          color="secondary"
          aria-label="add"
          size="small"
          className={classes.fab}
        >
          <Icon fontSize="small">delete</Icon>
        </Fab>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(TaskList);
