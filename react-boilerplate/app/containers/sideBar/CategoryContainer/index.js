import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { setCategory } from 'containers/sideBar/SideBar/actions';

import { makeSelectSelectedCategory } from 'containers/sideBar/SideBar/selectors';
import { makeSelectProfileId } from '../../../appUtilities/ProfileContext/selectors';
import { makeSelectCategories, makeSelectIsLoading } from './selectors';

import CategoryMapper from './CategoryMapper';
import LoaderWrapper from './LoaderWrapper';
import AddCategory from './AddCategory';

import {
  getCategories,
  deleteCategory,
  editCategory,
} from './actions';


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
        <CategoryMapper
          isOwner={this.props.isOwner}
          categories={this.props.categories}
          onSetCategory={this.props.setCategory}
          onEditCategory={this.props.editCategory}
          onDeleteCategory={this.props.deleteCategory}
        />
        {props.isOwner ? <AddCategory /> : <div></div>}
      </LoaderWrapper>
    );
  }
};

CategoryContainer.propTypes = {
  deleteCategory: PropTypes.func,
  getCategories: PropTypes.func,
  editCategory: PropTypes.func,
  categories: PropTypes.object,
  setCategory: PropTypes.func,
  isLoading: PropTypes.bool,
  ownerId: PropTypes.string,
  isOwner: PropTypes.bool,
};

const mapStateToProps = () => createStructuredSelector({
  selectedCategory: () => makeSelectSelectedCategory(),
  categories: () => makeSelectCategories(),
  isLoading: () => makeSelectIsLoading(),
  ownerId: () => makeSelectProfileId(),
});

const mapDispatchToProps = {
  getCategories,
  deleteCategory,
  editCategory,
  setCategory,
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'CategoryContainer', reducer });
const withSaga = injectSaga({ key: 'CategoryContainer', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(CategoryContainer);
