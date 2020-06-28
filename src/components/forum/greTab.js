import React from 'react'
import { withRouter } from 'react-router-dom';
import Comment from './comment';

const GreTab = props => {
  

  return (
    <div>
      <h3>Add Your Question</h3>
      <Comment />

  
    </div>
  )

}

export default withRouter(GreTab);
 