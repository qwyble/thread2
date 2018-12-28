import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';

import { makeSelectCategories } from 'containers/SideBar/CategoryContainer/selectors';
import { createStructuredSelector } from 'reselect';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import Error from 'components/common/Error';
import { addSongsToPlaylist } from './actions';

import { makeSelectIsLoading, makeSelectError } from './selectors';

class AddToPlaylistPortalForm extends React.Component {
  handleAddToPlaylist = e => {
    this.props.addSongsToPlaylist(e.target.value);
  };

  render() {
    return (
      <Menu
        inverted
        size="mini"
        style={{
          top: '20vh',
          left: '40vw',
          zIndex: 1000,
          overflow: 'auto',
          position: 'fixed',
          maxHeight: '60vh',
        }}
      >
        <LoaderWrapper isLoading={this.props.isLoading}>
          {this.props.categories.map((cat, key) => (
            <Menu.Item key={key}>
              {cat.catname}
              <Menu.Menu>
                {cat.pls ? (
                  cat.pls.map((pl, k) => (
                    <Menu.Item
                      link
                      key={k}
                      value={pl.plid}
                      onClick={this.handleAddToPlaylist}
                    >
                      {pl.plname}
                    </Menu.Item>
                  ))
                ) : (
                  <div />
                )}
              </Menu.Menu>
            </Menu.Item>
          ))}
        </LoaderWrapper>
        <Error error={this.props.error} />
      </Menu>
    );
  }
}

AddToPlaylistPortalForm.propTypes = {
  categories: PropTypes.array,
  addSongsToPlaylist: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = () =>
  createStructuredSelector({
    categories: () => makeSelectCategories(),
    isLoading: () => makeSelectIsLoading(),
    error: () => makeSelectError(),
  });

const mapDispatchToProps = {
  addSongsToPlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: AddToPlaylistSaga, saga });

export default compose(
  withSaga,
  withConnect
)(AddToPlaylistPortalForm);
