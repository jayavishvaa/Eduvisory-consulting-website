import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import AboutUs from './aboutus';
import ExploreYourNeed from './exploreYourNeed';
import Blog from './blog';
//import Forum from './forum';
import Login from './login';
import Home from './home';
import Signup from './signup';
//import ClippedDrawer from './ForumMaterial';
import ForumRoutes from './forum/forumRoutes';


export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route  path ="/aboutus" component={AboutUs}/>
                <Route  path ="/exploreyourneed" component={ExploreYourNeed}/>
                <Route  path ="/forum" component={ForumRoutes}/>
                <Route  path ="/blog" component={Blog}/>
                <Route path="/login" component={Login}/>     
                <Route path="/signup" component={Signup}/>
            </Switch>
        )
    }
}
