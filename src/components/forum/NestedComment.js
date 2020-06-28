import React from 'react';
import { Comment, Avatar } from 'antd';
import ReactDOM from 'react-dom';

const ExampleComment = ({ children },props) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
   
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        {props.Comment}
      </p>
    }
  >
    {children}
  </Comment>
);

ReactDOM.render(
  <ExampleComment>
    <ExampleComment>
      <ExampleComment />
      <ExampleComment />
    </ExampleComment>
  </ExampleComment>,
  
);

export default ExampleComment;