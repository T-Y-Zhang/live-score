/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom";

const styles = ({ palette, spacing }: Theme) => createStyles({
  root: {
    padding: spacing(2),
    display: 'flex',
    justifyContent: 'space-around'
  },
  footer: {
    backgroundColor: palette.background.paper,
    marginTop: spacing(8),
    padding: `${spacing(3)}px 0`,
  }
});
export interface IFooterProps {
  classes: any
}
const Footer: React.FC<IFooterProps> = (props) => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={0}>
        <div>
          <Typography variant="h5" component="h3">
            Live Score App
          </Typography>
          <Typography component="p">
            @2021 All right reserved
          </Typography>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Paper>
    </footer>
  );
}

export default withStyles(styles)(Footer);