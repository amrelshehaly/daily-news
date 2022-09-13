import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      padding: '5%',
      maxWidth: 'fit-content',
    },
    '& div': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: '0px !important',
      },
    },
  },
  vote: {
    '& :nth-child(1)': {
      marginRight: '10px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '10px',
      },
    },
    '& :nth-child(2)': {
      backgroundColor: 'gray',
    },
  },
  conversation: {
    display: 'inline-grid',
    height: '300px',
  },
}))
export default useStyles
