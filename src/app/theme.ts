import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({});
export const useCommonStyles = makeStyles(({spacing}) => ({
  content: {
    padding: spacing(2),
    minHeight: `calc(100vh - 277px)`
  }
}));

export default theme;
