import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Modal, Form } from './components';
import twitterFields from './form-fields/twitter-fields';

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(); // string of id

  const setFormInfo = (data) => {
    setTweets([...tweets, data]);
    setOpen(false);
  };

  const editPost = (id) => {
    console.log('editPost id', id);
    setShowEdit(tweets.find((tweet) => tweet.id === id));
    setOpenEdit(true);
  };

  const deletePost = (id) =>
    setTweets(tweets.filter((tweet) => tweet.id !== id));

  return (
    <div>
      <h1>No Tweets scheduled!</h1>
      <Modal openModalText='Create tweet' open={open} setOpen={setOpen}>
        <Form fields={twitterFields} setForm={setFormInfo} />
      </Modal>
      {!!tweets.length &&
        tweets.map(({ id, twitterMessage, postTime }) => (
          <Grid item xs={12} md={6} key={id}>
            <List dense={false}>
              <ListItem>
                <ListItemText primary={twitterMessage} secondary={postTime} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => editPost(id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={() => deletePost(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        ))}
      {openEdit && (
        <Modal openModalText='Edit tweet' open={openEdit} setOpen={setOpenEdit}>
          <Form
            fields={twitterFields}
            setForm={setFormInfo}
            defaultValuesProps={showEdit}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
