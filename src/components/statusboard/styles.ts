import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: 'center',
    border: '1px solid gray',
    width: '200px',
    margin: '0 auto',
    // marginBottom:'900px',
    marginTop: '30%',
    [theme.breakpoints.down('lg')]:{
        marginBottom:'0px',
        marginTop:'20px',
    },
    '& > div':{
        borderBottom:'1px solid gray',
        padding:'10px',

        '& p':{
            fontSize:'20px'
        }
    }
  },
}))
export default useStyles
