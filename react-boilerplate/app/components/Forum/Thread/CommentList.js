import React from 'react';
import PropTypes from 'prop-types';

const CommentList = props => (
  <div>
    <div className="ui segment">
      <div>Comments:</div>
      {props.comments.map(comment => (
        <div className="ui segment" key={comment.get('idThreadReplies')}>
          <div className="row">
            <div className="col-2">
              <img
                className="user-thumbnail-medium"
                src={comment.get('imageUrl')}
                alt=""
              />
            </div>
            <div className="col-10">
              <div>{comment.get('userName')}</div>
              <div>{comment.get('date')}</div>
              <br />
              <div>{comment.get('body')}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.object,
};

export default CommentList;
