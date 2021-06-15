import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { selectNumOfEntries } from './../features/events/eventSelectors';

const useStyles = makeStyles(({spacing, palette}) => ({
  root: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
  },
  entryContainer: {
    marginLeft: 'auto'
  }
}));

const Header: React.FC = () => {
  const numOfEntries = useSelector(selectNumOfEntries);
  const styles = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Sports News
        </Typography>
        <Typography variant="h6" className={styles.entryContainer}>
          Entry count: {numOfEntries}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;