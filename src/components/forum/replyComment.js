import React, {useState} from 'react';
import { Button, Input } from 'antd';
//import SingleComment from './SingleComment';
import { makeStyles } from '@material-ui/core/styles';
//import Avatar from '@material-ui/core/Avatar';
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
import CatTab from './catTab';
//import ExampleComment from './NestedComment';

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
function replyComment() {
    const classes = useStyles();

    const [ replyComment, setReplyComment ] = useState("");
    const [ pressed, setPressed ] = useState(false);
    const [ touched, setTouched ] = useState(false);


    const handleChange = (e) => {
        setReplyComment(e.currentTarget.value)
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
            <div>
            <div className={classes.root}>
      
            {pressed && <CatTab replyComment={replyComment}/>}
    </div>
            
            {touched && <Button onClick={replyClick}> comment ur reply</Button>}
                
            </div>                
                <TextArea
                    style={{width: '100%', borderRadius: '5px'}}
                    onChange={handleChange}
                    value={replyComment}
                    placeholder="Ask Your Question"
                />
                
                <br/>
                <Button onClick={handleClick} style={{width: '10%', height: '35px',marginTop:10,borderRadius:20,backgroundColor:'#03a9f4',color:'white'}} >Post</Button>
        </div>
    )
}

export default replyComment;
