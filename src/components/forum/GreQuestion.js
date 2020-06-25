import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';



export default class GreQuestion extends React.Component {
  
    state = {
      comments: [],
      submitting: false,
      value: '',
    };
  
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
          comments: [
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: <p>{this.state.value}</p>,
              datetime: moment().fromNow(),
            },
            ...this.state.comments,
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
      
      const { comments, submitting, value } = this.state;

  
      return (
        
        <div>

          <AskQuestion onPass={}/>
        
          {comments.length > 0 && <CommentList comments={comments} />}
          
         
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
          
        </div>
      );
    }
  }

 



