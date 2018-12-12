import React from 'react';
import {Segment, Button, Loader} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import SubscribeToThread from '../../containers/forum/subscribeToThread.js';


const ThreadView = (props) => (

  <div>

    <Segment>
      {props._loading ? <Loader active /> : <div></div>}
      {props.thread.Subject}
      <div>
        <Link to={`/profile/${props.thread.UserId}`} >
          {props.thread.userName}
        </Link>
      </div>
    </Segment>

    <Segment>
      <pre>
        {props.thread.Body}
      </pre>
    </Segment>

    <Button onClick={props.onOpenComment}>Comment</Button>
    <SubscribeToThread threadId={props.thread.idThreadPost} />
    
    {props.isOwner ? <Button onClick={() => props.onDeleteThread(props.thread.idThreadPost)}>Delete Thread</Button> : <div></div>}


  </div>

)

export default ThreadView;
