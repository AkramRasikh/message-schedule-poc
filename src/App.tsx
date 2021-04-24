import React from 'react';
import { Modal, Form } from './components';
import twitterFields from './form-fields/twitter-fields';

const App: React.FC = () => {
  return (
    <div>
      <h1>No Tweets scheduled!</h1>
      <Modal openModalText='Create tweet'>
        <Form fields={twitterFields} />
      </Modal>
    </div>
  );
};

export default App;
