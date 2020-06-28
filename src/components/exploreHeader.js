import React, { Component } from 'react';
import '../components/exploreYourNeed.css';
import { Menu, Dropdown, Button } from 'antd';

const Scholarship = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Scholarship in India </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Scholarship in USA </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Scholarship in Europe</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Scholarship in Canada</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Scholarship in Singapore</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Scholarship in Australia</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Scholarship in UK</a>
      </Menu.Item>
    </Menu>
  );

  const Exam = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">GATE</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">GRE</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">CAT</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">GMAT</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">TOEFL</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">IELTS</a>
      </Menu.Item>
    </Menu>
  );

  const Degrees = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">M.Tech</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">MS (by Research)</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Direct phD</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">phD</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Project Associate (JRF, SRF)</a>
      </Menu.Item>
    </Menu>
  );
  
  const ApplicationProcedure = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Statement of Purpose (SOP)</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Research Proposal (RP)</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Letter of Recommendation (LOR)</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Curriculum Vitae (CV)</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Other Documents</a>
      </Menu.Item>
    </Menu>
  );

export default class ExploreHeader extends Component {
    render() {
        return (
            <div className="exploreHeader">
                <div className="headerContent">
                <Dropdown overlay={Scholarship} placement="bottomLeft">
                  <Button style={{marginRight:20}}>Scholarship</Button>
                </Dropdown>
                <Dropdown overlay={Exam} placement="bottomLeft">
                  <Button style={{marginRight:20}}>Exam</Button>
                </Dropdown>
                <Dropdown overlay={Degrees} placement="bottomLeft">
                  <Button style={{marginRight:20}}>Degrees</Button>
                </Dropdown>
                <Dropdown overlay={ApplicationProcedure} placement="bottomLeft">
                  <Button style={{marginRight:20}}>Application Procedure</Button>
                </Dropdown>
                </div>
            
            
            </div>
        )
    }
}
