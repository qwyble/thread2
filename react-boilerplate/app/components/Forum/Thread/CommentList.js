import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Item } from 'semantic-ui-react';

const CommentList = props => (
  <div>
    <Segment>
      <Header>Comments:</Header>
      {props.comments.map((comment, i) => (
        <Segment key={i}>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" src={comment.imageUrl} />
              <Item.Content>
                <Item.Header>{comment.userName}</Item.Header>
                <Item.Meta>{comment.date}</Item.Meta>
                <Item.Description>{comment.body}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      ))}
    </Segment>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.object,
};

export default CommentList;
