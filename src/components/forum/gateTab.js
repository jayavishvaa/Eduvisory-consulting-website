import React from 'react'
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Forum } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


  
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      color: 'black',
      fontWeight:'bold',
      marginBottom:20,
      backgroundColor:'#009688',
    },

}));  


const GateSubTabs = props => {
  const { history } = props;
  const classes = useStyles();
  const data = [
  

    {
      title: 'Aerospace Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE/AerospaceEngineering')

    },
    {
      title: 'Agricultural Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Architecture and Planning ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Biotechnology',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Civil Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Chemical Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Computer Science and Information Technology ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Chemistry',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Electronics and Communication Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Electrical Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Ecology and Evolution ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Geology and Geophysics',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Instrumentation Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Mathematics',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Mechanical Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Mining Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Metallurgical Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Petroleum Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Physics',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Production and Industrial Engineering ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Textile Engineering and Fibre Science ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Engineering Sciences ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      title: 'Life Sciences ',
      icon: <Forum/>,
      onClick: () => history.push('/Forum/GATE')
    },
  ];
  return (
    <div >
      <h3>Discussion Tab for different Gate Paper</h3>
        <List>
        {data.map((item,index) => {
            const { title, icon, onClick } = item;
            return (
                <div>
                  
                    <Grid container spacing={3} >
                      <Avatar src="/broken-image.jpg" style={{marginTop:23}}/>
                       <Grid item xs={10}>
                           <Paper className={classes.paper}>
                           <ListItem key={title}>
                             {icon && <ListItemIcon style={{color:'white'}}>{icon}</ListItemIcon>}
                           <ListItemText style={{color:'white',fontSize:16}} primary={title}/>
                           <Button key={title} onClick={onClick} style={{color:'white',borderRadius:1,borderColor:'white'}}>
                             ADD COMMENT
                           </Button>
                    
                           </ListItem>
                           </Paper>
                       </Grid>
                    </Grid>
                
                </div>
            )
        })}
        <Divider/>
        </List>


    </div>
  )

}

export default withRouter(GateSubTabs);
 