import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AddCategoryForm from 'components/SideBar/Categories/CategoryModifiers/AddCategoryForm';
import LoaderWrapper from 'containers/SideBar/CategoryContainer/utils/LoaderWrapper';

import { addCategory } from './actions';

import { makeSelectIsLoading, makeSelectError } from './selectors';

const AddCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <AddCategoryForm onAddCategory={props.addCategory} error={props.error} />
  </LoaderWrapper>
);

AddCategory.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  addCategory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: () => makeSelectIsLoading(),
  error: () => makeSelectError(),
});

const mapDispatchToProps = {
  addCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(AddCategory);
