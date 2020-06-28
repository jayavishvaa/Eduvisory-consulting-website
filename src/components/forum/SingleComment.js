import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
import CatTab from './catTab';

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

function SingleComment(props) {
    const classes = useStyles();


    const [ singleComment, setSingleComment ] = useState("",props);
    const [ onePressed, setOnePressed ] = useState(false,props);
    const [ count, setCount ] = useState(0);


    const handleChange = (e) => {
        setSingleComment(e.currentTarget.value)
    }

    const handleClick = () => {
        setOnePressed(true);
        setCount(count + 1)
        console.log(Comment);
    }

    const textBox = () => {
      if(!onePressed) {
        return (
          <div>
             <TextArea
                    style={{width: '100%', borderRadius: '5px',marginLeft:35}}
                    onChange={handleChange}
                    value={singleComment}
                    placeholder="Add Your Comment"
                />
                
                <br/>
                <Button onClick={handleClick} style={{marginLeft:35,width: '10%', height: '35px',marginTop:10,borderRadius:20,backgroundColor:'#03a9f4',color:'white',marginBottom:20}} >Submit</Button>
          </div>
        )
      }
    }


    return (
        <div>
            <div className={classes.root}>

               {onePressed && <CatTab Comment={singleComment} onePressed={onePressed}/>}
            </div>
            {
              textBox()
            }
            
        </div>
    )
}

export default SingleComment;


