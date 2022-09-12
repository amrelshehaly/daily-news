import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      maxWidth: 800,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 360,
      margin: '0 auto',
    },
  },
}))
export default useStyles
