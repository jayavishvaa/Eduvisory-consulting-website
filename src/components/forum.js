import React from 'react';
import 'antd/dist/antd.css';
import './forum.css'
import { Switch, Route } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import {SettingOutlined,TeamOutlined,UserOutlined,EditOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
//import ForumRoutes from './forum/forumRoutes';
//import GateTab from './forum/gateTab';
import GreTab from './forum/greTab';
import CatTab from './forum/catTab';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

//<Link to={`${this.props.match.url}/GATE`}>Gate</Link>

export default class Forum extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             collapsed:false,
             
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

    question =() => {
      console.log("Enter ur question")
    }



    render(){


        return(
            <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}position="absolute">
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
              <Menu.Item key="1">Tom</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Discussion">
              <Menu.Item key="4">
                <Link to={`${this.props.match.url}/GATE`}>Gate</Link>
              </Menu.Item>
              <Menu.Item key="5">
              <Link to={`${this.props.match.url}/GRE`}>Gre</Link>
              </Menu.Item>
              <Menu.Item key="6">
              <Link to={`${this.props.match.url}/CAT`} onClick={this.onCollapse}>Cat</Link>
              </Menu.Item>
              <Menu.Item key="7">
              <Link to={`${this.props.match.url}/GMAT`}>GMAT</Link>
              </Menu.Item>
              <Menu.Item key="8">
              <Link to={`${this.props.match.url}/TOEFL`}>TOEFL</Link>
              </Menu.Item>
              <Menu.Item key="9">
              <Link to={`${this.props.match.url}/IELTS`}>IELTS</Link>
              </Menu.Item>
              
            </SubMenu>
            <Menu.Item key="10" icon={<EditOutlined />} onClick={this.question}>Ask a question </Menu.Item>
            <Menu.Item Key='11' icon={<SettingOutlined />} > Settings </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
            <div>
            
                <Route exact path={`${this.props.match.path}/:CAT`} component={CatTab}/> 
                <Route exact path={`${this.props.match.path}/:GRE`} component={GreTab}/> 
        
                
    
            </div>
            </Switch>
            

               
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
        )
    }
}





//  <Drawer
      //  className={classes.drawer}
      //  variant="permanent"
      //  anchor={'left'}
    //    classes={{
       //   paper: classes.drawerPaper,
       // }}
        
     // >
      //  <Toolbar />
     //   <div className={classes.drawerContainer}>
      //    <List>
           
       //       {itemList.map((item, index) => {
        //        const { name, icon, onClick} = item;
         //       return (
         //         <ListItem button key={name} onClick={onClick}>
         //           {icon && <ListItemIcon>{icon}</ListItemIcon>}
         //           <ListItemText primary={name}/>
         //         </ListItem>
          //      )
          //    })}
            
        //  </List>
        //  <Divider />
      //  </div>
     // </Drawer>