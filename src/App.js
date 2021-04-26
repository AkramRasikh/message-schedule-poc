import React, { useState } from 'react';
import { Grid, List } from '@material-ui/core';
import { Modal, Form, ListItemComponent } from './components';
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
    setShowEdit(tweets.find((tweet) => tweet.id === id));
    setOpenEdit(true);
  };

  const setEdittedForm = (data) => {
    setTweets(
      tweets.map((tweet) => {
        if (tweet.id === data.id) {
          return data;
        }
        return tweet;
      }),
    );
    setOpenEdit(false);
    setShowEdit(null);
  };

  const deletePost = (id) =>
    setTweets(tweets.filter((tweet) => tweet.id !== id));

  return (
    <div>
      <h1>No Tweets scheduled!</h1>
      <Modal openModalText='Create tweet' open={open} setOpen={setOpen}>
        <Form fields={twitterFields} setForm={setFormInfo} />
      </Modal>
      {!!tweets.length && (
        <Grid item xs={12} md={6}>
          <List dense={false}>
            {tweets.map(({ id, twitterMessage, postTime }) => (
              <ListItemComponent
                key={id}
                primaryText={twitterMessage}
                secondaryText={postTime}
                editPost={() => editPost(id)}
                deletePost={() => deletePost(id)}
              />
            ))}
          </List>
        </Grid>
      )}
      {openEdit && (
        <Modal openModalText='Edit tweet' open={openEdit} setOpen={setOpenEdit}>
          <Form
            fields={twitterFields}
            setForm={setEdittedForm}
            defaultValues={showEdit}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
