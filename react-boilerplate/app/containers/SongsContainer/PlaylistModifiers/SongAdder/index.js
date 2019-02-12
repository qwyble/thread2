import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { makeSelectCategories } from 'containers/SideBar/CategoryContainer/selectors';
import saga from './saga';

import { addSongsToPlaylist } from './actions';
import { makeSelectIsLoading } from './selectors';

class SongAdder extends React.Component {
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
      </Menu>
    );
  }
}

SongAdder.propTypes = {
  categories: PropTypes.object.isRequired,
  addSongsToPlaylist: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  isLoading: makeSelectIsLoading(),
});

const mapDispatchToProps = {
  addSongsToPlaylist,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'SongAdderSaga', saga });

export default compose(
  withSaga,
  withConnect
)(SongAdder);
