import React from 'react';
import PropTypes from 'prop-types';
import { Portal, Button } from 'semantic-ui-react';

import { compose  } from 'redux';
import { connect  } from 'react-redux';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectError, makeSelectIsPublic, makeSelectSelectedPlName } from './selectors';
import { makePublic } from './actions';

class PublicityPortal extends React.Component {

  render(){

    const isPublicButton = (
      <Button>
        {this.props.isPublic ? <div>Make Private</div> : <div>Make Public</div>}
      </Button>
    )

    return(
      <div>
        <Portal trigger={isPublicButton}>
          <div>
            <Segment>
              Set {this.props.plname}
            </Segment>
          </div>
        </Portal>
      </div>
    )
  }
}

