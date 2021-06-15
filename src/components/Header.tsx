import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { selectNumOfEntries } from './../features/events/eventSelectors';

const Header: React.FC = () => {
  const numOfEntries = useSelector(selectNumOfEntries);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          News
        </Typography>
        <Typography variant="h6">
          Entry count: {numOfEntries}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;