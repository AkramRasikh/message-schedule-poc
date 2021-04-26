import React from 'react';
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ListItemComponent = ({
  primaryText,
  secondaryText,
  editPost,
  deletePost,
}) => (
  <ListItem>
    <ListItemText primary={primaryText} secondary={secondaryText} />
    <ListItemSecondaryAction>
      <IconButton edge='end' aria-label='edit' onClick={editPost}>
        <EditIcon />
      </IconButton>
      <IconButton edge='end' aria-label='delete' onClick={deletePost}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default ListItemComponent;
