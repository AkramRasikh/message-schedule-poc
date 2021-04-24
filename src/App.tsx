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

interface TwitterFormat {
  twitterMessage: string;
  postTime: Date;
}

const App: React.FC = () => {
  const [tweets, setTweets] = useState<TwitterFormat[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const setFormInfo = (data: TwitterFormat) => {
    setTweets([...tweets, data]);
    setOpen(false);
  };

  // attach listner to edit icon and pass that same one in filter by id

  return (
    <div>
      <h1>No Tweets scheduled!</h1>
      <Modal openModalText='Create tweet' open={open} setOpen={setOpen}>
        <Form fields={twitterFields} setForm={setFormInfo} />
      </Modal>
      {!!tweets.length &&
        tweets.map(({ twitterMessage, postTime }) => {
          return (
            <Grid item xs={12} md={6} key={twitterMessage}>
              <List dense={false}>
                <ListItem>
                  <ListItemText primary={twitterMessage} secondary={postTime} />
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='edit'>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
          );
        })}
      {showEdit && (
        <Modal openModalText='Edit tweet' open={open} setOpen={setOpen}>
          <Form fields={twitterFields} setForm={setFormInfo} />
        </Modal>
      )}
    </div>
  );
};

export default App;

// function generate(element: React.ReactElement) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }
