import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from "./styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

function TaskForm(props) {
	const { openForm, closeForm, open, classes } = props;
	return (
		<Dialog open={open} onClose={() => closeForm()} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
			<DialogContent>
				<h1>Dialog Content</h1>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Name"
					type="text"
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Description"
					type="text"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => closeForm()} color="primary">
					Cancel
          </Button>
				<Button onClick={() => closeForm()} color="primary">
					OK
          </Button>
			</DialogActions>
		</Dialog>
	);
}

export default withStyles(styles)(TaskForm);