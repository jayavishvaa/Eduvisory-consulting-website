import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
//import GateTab from './gateTab';
import GreTab from './greTab';
import CatTab from './catTab';
import GmatTab from './gmatTab';
import ToeflTab from './toeflTab';
import IeltsTab from './ieltsTab';
import ClippedDrawer from '../ForumDrawer';
import AskQuestion from './askQuestion';
import GateSubTabs from './gateTab';
import AerospaceEngineering from './gateTabs/AerospaceEngineering';
import Home from './home';


//<Route exact path={`${this.props.match.path}/:CAT`} component={CatTab}/> 

export default class ForumRoutes extends Component {
    render() {
        return (
            <div>
            <ClippedDrawer/>
            <div style={{marginTop:80,marginLeft:280,marginRight:80}}>
            <Switch>
                <Route exact path='/forum/HOME' render={props => <Home {...props}/>} />
                <Route exact path='/forum/GATE' render={props => <GateSubTabs {...props}/>} />
                <Route exact path='/forum/GRE' render={props => <GreTab {...props}/>} /> 
                <Route exact path='/forum/CAT' render={props => <CatTab {...props}/>} /> 
                <Route exact path='/forum/GMAT' render={props => <GmatTab {...props}/>} />
                <Route exact path='/forum/IELTS' render={props => <IeltsTab {...props}/>} />
                <Route exact path='/forum/TOEFL' render={props => <ToeflTab {...props}/>} />
                <Route exact path='/forum/GRE/AskQuestion' render={props => <AskQuestion {...props}/>} />
                <Route exact path='/forum/GATE/AerospaceEngineering' render={props => <AerospaceEngineering {...props}/>} />
            </Switch>
            </div>
            </div>
        );
    }
}
