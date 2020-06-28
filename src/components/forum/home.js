import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const home = props => {
    
    const { history } = props;
    const classes = useStyles();



    const itemList = [

        {
          name: "GATE",
          onClick: () => history.push('/Forum/GATE')
        },
        {
          name: "GRE",
          onClick: () => history.push('/Forum/GRE')
        },
        {
          name: "CAT",
          onClick: () => history.push('/Forum/CAT')
        },
        {
          name: "GMAT",
          onClick: () => history.push('/Forum/GMAT')
        },
        {
          name: "IELTS",
          onClick: () => history.push('/Forum/IELTS')
        },
        {
          name: "TOEFL",
          onClick: () => history.push('/Forum/TOEFL')
        },
        {
          name: "Settings",
          onClick: () => history.push('/Forum')
        },
      ]
    return (
        <div>
            <h3>Discussion</h3>
            <div className={classes.root}>
              <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div">December</ListSubheader>
               </GridListTile>
               {tileData.map((tile) => (
                 <GridListTile key={tile.img}>
                   <img src={tile.img} alt={tile.title} />
                 <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                      <InfoIcon />
                      </IconButton>
                }
             />
               </GridListTile>
        ))}
      </GridList>
    </div>

            <List>
           
           {itemList.map((item, index) => {
             const { name, icon, onClick} = item;
             return(
               <ListItem button key={name} onClick={onClick}>
                 {icon && <ListItemIcon>{icon}</ListItemIcon>}
                 <ListItemText primary={name}/>
               </ListItem>
             )
           })}
         
       </List>
        </div>
    );
}

export default withRouter(home);
