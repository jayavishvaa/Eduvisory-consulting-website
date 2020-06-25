import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      color: 'white',
      fontSize:15,
      fontWeight:'bold',
      marginLeft:20,
      backgroundColor:'#607d8b',
      marginBottom:20,
    },
  }));

const { TextArea } = Input;

function SingleComment() {
    const classes = useStyles();


    const [ singleComment, setSingleComment ] = useState("");
    const [ onePressed, setOnePressed ] = useState(false);
    const [ count, setCount ] = useState(0);


    const handleChange = (e) => {
        setSingleComment(e.currentTarget.value)
    }

    const handleClick = () => {
        setOnePressed(true);
        setCount(count + 1)
        console.log(Comment);
    }


    return (
        <div>
            <div className={classes.root}>
             <h6>{onePressed && count} reply</h6>
             <Grid container spacing={3}>
              <Grid item xs={12}>
               <Paper className={classes.paper}>REPLY: <div style={{fontStyle:'italic'}}>{onePressed && singleComment}</div></Paper>
              </Grid>
             </Grid>
            </div>
            <TextArea
                    style={{width: '100%', borderRadius: '5px'}}
                    onChange={handleChange}
                    value={singleComment}
                    placeholder="Add Your Comment"
                />
                
                <br/>
                <Button onClick={handleClick} style={{width: '10%', height: '35px',marginTop:10,borderRadius:20,backgroundColor:'#03a9f4',color:'white',marginBottom:20}} >Submit</Button>
        </div>
    )
}

export default SingleComment;


