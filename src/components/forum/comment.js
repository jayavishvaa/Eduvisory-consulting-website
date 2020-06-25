import React, {useState} from 'react';
import { Button, Input } from 'antd';
import SingleComment from './SingleComment';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: 'white',
    fontSize:15,
    fontWeight:'bold',
    backgroundColor:'#607d8b',
    marginBottom:20,
    flexFlow:'row',
  },
}));


const { TextArea } = Input;
function Comment() {
    const classes = useStyles();

    const [ Comment, setComment ] = useState("");
    const [ pressed, setPressed ] = useState(false);
    const [ touched, setTouched ] = useState(false);


    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const handleClick = () => {
        setPressed(true);
        console.log(Comment);
    }

   const replyClick = () => {
      setTouched(true);
    }



    return (
        <div style={{ marginTop:20}}>
            <br />
            <div style={{}}>
            <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
    <Paper className={classes.paper}>QUESTION: <div style={{fontStyle:'italic'}}>{pressed && Comment}</div></Paper>
        </Grid>
      </Grid>
    </div>
            
            {touched && <Button onClick={replyClick}> comment ur reply</Button>}
                {pressed && <div><SingleComment/></div>}
            </div>                
                <TextArea
                    style={{width: '100%', borderRadius: '5px'}}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="Ask Your Question"
                />
                
                <br/>
                <Button onClick={handleClick} style={{width: '10%', height: '35px',marginTop:10,borderRadius:20,backgroundColor:'#03a9f4',color:'white'}} >Post</Button>
        </div>
    )
}

export default Comment;
