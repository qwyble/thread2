import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import { compose } from 'redux';
import { connect } from 'react-redux';

import PortalWrapper from 'components/common/PortalWrapper';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectSelectedPlName } from 'containers/SideBar/PlaylistContainer/selectors';

import reducer from './reducer';
import saga from './saga';

import { makeSelectIsLoading, makeSelectIsPublic } from './selectors';

import { makePublic } from './actions';

const PublicityPortal = props => {
  const isPublicButton = (
    <Button>
      {props.isPublic ? (
        <Button icon primary size="mini" floated="right" labelPosition="left">
          <div>
            <Icon name="privacy" /> Make Private{' '}
          </div>
        </Button>
      ) : (
        <Button icon primary size="mini" floated="right" labelPosition="left">
          <div>
            <Icon name="user" /> Make Public{' '}
          </div>
        </Button>
      )}
    </Button>
  );

  const pubPriv = (
    <span>{props.isPublic ? <span>private</span> : <span>public</span>}</span>
  );

  return (
    <div>
      <PortalWrapper trigger={isPublicButton}>
        <LoaderWrapper isLoading={props.isLoading}>
          Set {props.plname} to {pubPriv}?
          <div>
            <Button onClick={props.makePublic}>yes</Button>
            <Button onClick={props.closePortal}>no</Button>
          </div>
        </LoaderWrapper>
      </PortalWrapper>
    </div>
  );
};

PublicityPortal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPublic: PropTypes.bool.isRequired,
  plname: PropTypes.string.isRequired,
  closePortal: PropTypes.func.isRequired,
  makePublic: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  isPublic: makeSelectIsPublic(),
  plname: makeSelectSelectedPlName(),
});

const mapDispatchToProps = {
  makePublic,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'PublicityPortal', reducer });
const withSaga = injectSaga({ key: 'PublicityPortalSaga', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(PublicityPortal);
