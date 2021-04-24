import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, Button, Grid } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: '80%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

interface SimpleModalProps {
  children: React.ReactNode;
  openModalText: string;
  setOpen: (open: boolean) => void;
  open: boolean;
}

const SimpleModal: React.FC<SimpleModalProps> = ({
  children,
  openModalText,
  setOpen,
  open,
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Grid style={modalStyle} className={classes.paper}>
      {children}
    </Grid>
  );

  return (
    <Grid>
      <Button type='button' onClick={handleOpen}>
        {openModalText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </Grid>
  );
};

export default SimpleModal;
