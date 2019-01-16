import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';

import { setCurrentPage } from 'containers/SongsContainer/SongsContainer/actions';
import { makeSelectTotalPages } from 'containers/SongsContainer/SongsContainer/selectors';

import { connect } from 'react-redux';
import { compose } from 'redux';

class Paginator extends React.Component {
  handlePageChange = (e, d) => {
    const currentItem = (d.activePage - 1) * 20;
    this.props.setCurrentPage(currentItem);
  };

  render() {
    return (
      <Pagination
        inverted
        pointing
        secondary
        defaultActivePage={1}
        totalPages={this.props.totalPages}
        onPageChange={this.handlePageChange}
      />
    );
  }
}

Paginator.propTypes = {
  setCurrentPage: PropTypes.func,
  totalPages: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  totalPages: makeSelectTotalPages(),
});

const mapDispatchToProps = {
  setCurrentPage,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Paginator);
