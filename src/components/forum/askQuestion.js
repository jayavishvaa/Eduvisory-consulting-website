import React, { Component } from 'react';
import { Comment,Input, Form, Button, List, Avatar } from 'antd';
import moment from 'moment';
//import GreQuestion from './GreQuestion';

const { TextArea } = Input;

const CommentList = ({ question }) => (
  <div>
    <List
      dataSource={question}
      header={`${question.length} ${question.length > 1 ? 'questions' : 'question'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
    </div>
  );


const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Submit
        </Button>
      </Form.Item>
    </div>
  );

export default class AskQuestion extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            question: [],
            value: '',
            submitting: false,
        }
    }

    handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });

        setTimeout(() => {
            this.setState({
              submitting: false,
              value: '',
              question: [
                {
                  author: 'Han Solo',
                  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                  content: <p>{this.state.value}</p>,
                  datetime: moment().fromNow(),
                  reply: 'reply'
                },
                ...this.state.question,
              ],
            });
          }, 1000);
        };
      

    

    handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };


      

    
    render() {

        const {  question, submitting, value } = this.state;

        return (
            <div>
                
                {question.length > 0 && <CommentList question={question}/>}
                
                
                <Comment
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    />
                  }
                  
                  content={
                    <Editor 
                    rows={4}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                  

                  }
                /> 
                
            </div>
        )
    }
}

