import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Segment } from 'semantic-ui-react';

import PropChecker from 'components/common/Conditional/PropChecker';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import ClonePortalForm from 'components/SongsTable/ClonePortal/ClonePortalForm';

import { makeSelectSelectedPlid } from 'containers/SideBar/SideBarContainer/selectors';
import { makeSelectCategories } from 'containers/SideBar/CategoryContainer/selectors';
import { makeSelectIsLoading, makeSelectDidSucceed } from './selectors';

import { clonePlaylist } from './actions';

import reducer from './reducer';
import saga from './saga';

class ClonePortalContainer extends React.PureComponent {
  render() {
    console.log('rendered');
    const PortalMessage = (
      <div>You must select a playlist, you can‘t clone a stream.</div>
    );
    const SuccessMessage = <div>Playlist successfully cloned.</div>;
    return (
      <div>
        <Segment
          inverted
          style={{
            left: '15%',
            bottom: '10%',
            width: '200px',
            position: 'fixed',
          }}
        >
          <LoaderWrapper isLoading={this.props.isLoading}>
            <PropChecker field={this.props.plToClone} alt={PortalMessage}>
              <PropChecker field={!this.props.didSucceed} alt={SuccessMessage}>
                <ClonePortalForm
                  categories={this.props.categories}
                  onClonePlaylist={this.props.clonePlaylist}
                  onClosePortal={this.props.onClosePortal}
                  plToClone={this.props.plToClone}
                />
              </PropChecker>
            </PropChecker>
          </LoaderWrapper>
        </Segment>
      </div>
    );
  }
}

ClonePortalContainer.propTypes = {
  isLoading: PropTypes.bool,
  plToClone: PropTypes.string,
  categories: PropTypes.object,
  clonePlaylist: PropTypes.func,
  didSucceed: PropTypes.bool,
  onClosePortal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  plToClone: makeSelectSelectedPlid(),
  categories: makeSelectCategories(),
  didSucceed: makeSelectDidSucceed(),
});

const mapDispatchToProps = {
  clonePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'ClonePortal', reducer });
const withSaga = injectSaga({ key: 'clonePortalSaga', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ClonePortalContainer);
