import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AddCategoryForm from 'components/SideBar/Categories/CategoryModifiers/AddCategoryForm';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { addCategory } from './actions';

import { makeSelectIsLoading } from './selectors';

const AddCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <AddCategoryForm onAddCategory={props.addCategory} />
  </LoaderWrapper>
);

AddCategory.propTypes = {
  isLoading: PropTypes.bool,
  addCategory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
});

const mapDispatchToProps = {
  addCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(AddCategory);
