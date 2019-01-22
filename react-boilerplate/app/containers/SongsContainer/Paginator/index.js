import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import { setCurrentItem } from 'containers/SongsContainer/SongsContainer/actions';
import {
  makeSelectTotalPages,
  makeSelectCurrentItem,
} from 'containers/SongsContainer/SongsContainer/selectors';

import { connect } from 'react-redux';
import { compose } from 'redux';

class Paginator extends React.Component {
  handlePageChange = (e, d) => {
    const CurrentItem = (d.activePage - 1) * 20;
    this.props.setCurrentItem(CurrentItem);
  };

  render() {
    console.log(this.props.CurrentItem);
    return (
      <span style={{ display: 'inline-block', marginLeft: 'auto' }}>
        <Pagination
          floated="right"
          inverted
          pointing
          secondary
          activePage={this.props.CurrentItem / 20 + 1}
          totalPages={this.props.totalPages}
          onPageChange={this.handlePageChange}
          style={{ marginLeft: 'auto' }}
        />
      </span>
    );
  }
}

Paginator.propTypes = {
  CurrentItem: PropTypes.number,
  setCurrentItem: PropTypes.func,
  totalPages: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  totalPages: makeSelectTotalPages(),
  CurrentItem: makeSelectCurrentItem(),
});

const mapDispatchToProps = {
  setCurrentItem,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Paginator);
