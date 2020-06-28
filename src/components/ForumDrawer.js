import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Home, Settings, Chat} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:100,
    
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

 const ClippedDrawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemList = [

    {
      name: "Home",
      icon: <Home/>,
      onClick: () => history.push('/Forum')
    },
    {
      name: "GATE",
      icon: <Chat/>,
      onClick: () => history.push('/Forum/GATE')
    },
    {
      name: "GRE",
      icon: <Chat/>,
      onClick: () => history.push('/Forum/GRE')
    },
    {
      name: "CAT",
      icon: <Chat/>,
      onClick: () => history.push('/Forum/CAT')
    },
    {
      name: "GMAT",
      icon: <Chat/>,
      onClick: () => history.push('/Forum/GMAT')
    },
    {
      name: "IELTS",
      icon: <Chat/>,
      onClick: () => history.push('/Forum/IELTS')
    },
    {
      name: "TOEFL",
      icon: <Chat/>,
      onClick: () => history.push('/Forum/TOEFL')
    },
    {
      name: "Settings",
      icon: <Settings/>,
      onClick: () => history.push('/Forum')
    },
  ]

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{color:'white'}}>
            Forum
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        position="relative"
        anchor={'left'}
        classes={{
          paper: classes.drawerPaper,
        }}
        
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           
              {itemList.map((item, index) => {
                const { name, icon, onClick} = item;
                return(
                  <ListItem button key={name} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={name}/>
                    <Divider/>
                  </ListItem>
                )
              })}
            
          </List>
          <Divider />
        </div>
      </Drawer>
      
    </div>
  );
}

export default withRouter(ClippedDrawer);
