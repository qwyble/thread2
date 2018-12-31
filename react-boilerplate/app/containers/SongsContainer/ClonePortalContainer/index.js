import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Segment } from 'semantic-ui-react';

import Error from 'components/common/Error';
import PropChecker from 'components/common/PropChecker';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import ClonePortalForm from 'components/SongsTable/ClonePortal/ClonePortalForm';

import { makeSelectSelectedPlaylist } from 'containers/SideBar/SideBarContainer/selectors';
import { makeSelectCategories } from 'containers/SideBar/CategoryContainer/selectors';
import { makeSelectIsLoading, makeSelectError } from './selectors';

import { clonePlaylist } from './actions';

import reducer from './reducer';
import saga from './saga';

class ClonePortalContainer extends React.Component {
  state = {
    selectedCatId: '',
    selectedCatName: '',
    plname: '',
    error: '',
    disabled: true,
  };

  handleInputChange = e => {
    const plname = e.target.value;
    this.setState({ plname }, () => {
      this.validateInput();
    });
  };

  handleCatSelect = (e, d) => {
    this.setState({ selectedCatId: d.value, selectedCatName: d.text }, () => {
      this.validateInput();
    });
  };

  validateInput = () => {
    if (this.state.plname.length < 2) {
      this.setState({
        error: 'playlist name must be at least two characters',
        disabled: true,
      });
    } else if (!this.state.selectedCatId) {
      this.setState({ error: 'you must select a category', disabled: true });
    } else {
      this.setState({ error: '', disabled: false });
    }
  };

  handleClonePlaylist = () => {
    this.props.clonePlaylist(this.state.selectedCatId, this.state.plname, this.state.plToClone);
  };

  render() {
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
              <PropChecker field={!this.state.success} alt={SuccessMessage}>
                <ClonePortalForm
                  categories={this.props.categories}
                  onCatSelect={this.handleCatSelect}
                  onInputChange={this.handleInputChange}
                  onClonePlaylist={this.handleClonePlaylist}
                  disabled={this.state.disabled}
                  selectedCatName={this.state.selectedCatName}
                />
              </PropChecker>
            </PropChecker>
            <Error error={this.state.error || this.props.error} />
          </LoaderWrapper>
        </Segment>
      </div>
    );
  }
}

ClonePortalContainer.propTypes = {
  isLoading: PropTypes.bool,
  plToClone: PropTypes.string,
  categories: PropTypes.array,
  clonePlaylist: PropTypes.func,
  error: PropTypes.object,
};

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: () => makeSelectIsLoading(),
    plToClone: () => makeSelectSelectedPlaylist(),
    categories: () => makeSelectCategories(),
    error: () => makeSelectError(),
  });

const mapDispatchToProps = {
  clonePlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'clonePortal', reducer });
const withSaga = injectSaga({ key: 'clonePortalSaga', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(ClonePortalContainer);
