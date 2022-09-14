import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '100px 100px 0px 100px',
    [theme.breakpoints.down('md')]: {
      paddingRight: '20px !important',
    },
  },
}))
export default useStyles
