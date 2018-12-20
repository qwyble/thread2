import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CategoryMapper from './CategoryMapper';
import LoaderWrapper from './LoaderWrapper';
import AddCategory from './AddCategory';

import { makeSelectProfileId } from '../../../appUtilities/ProfileContext/selectors';
import { makeSelectCategories, makeSelectIsLoading } from './selectors';

class CategoryContainer extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ownerId !== this.props.ownerId) this.props.getCategories();
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <CategoryMapper categories={this.props.categories} />
        {props.isOwner ? <AddCategory /> : <div></div>}
      </LoaderWrapper>

    )
  }
};

CategoryContainer.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.object,
  isLoading: PropTypes.bool,
  ownerId: PropTypes.string,
  isOwner: PropTypes.bool,
};

const mapStateToProps = () => createStructuredSelector({
  categories: () => makeSelectCategories(),
  isLoading: () => makeSelectIsLoading(),
  ownerId: () => makeSelectProfileId(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(CategoryContainer);
