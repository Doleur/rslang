import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { bool, func, string } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const ContainedButtons = ({ nameButton, color, answer, checkCorrect }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Button
          variant="contained"
          color={color}
          onClick={() => {
            checkCorrect(answer);
          }}
        >
          {nameButton}
        </Button>
      </div>
    </>
  );
};

ContainedButtons.propTypes = {
  nameButton: string,
  color: string,
  checkCorrect: func,
  answer: bool
};

export default ContainedButtons;
