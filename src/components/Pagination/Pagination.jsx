import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const BasicPagination = ({ currentPage, updateCurrentPage }) => {
  const classes = useStyles();

  const handleChange = (event, value) => {
    updateCurrentPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        onChange={handleChange}
        page={currentPage}
        count={30}
        color="primary"
      />
    </div>
  );
};

BasicPagination.propTypes = {
  updateCurrentPage: PropTypes.func,
  currentPage: PropTypes.number
};

export default BasicPagination;
