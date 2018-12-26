import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DeleteCategoryForm from 'components/SideBar/Categories/CategoryModifiers/DeleteCategoryForm';
import LoaderWrapper from 'containers/SideBar/CategoryContainer/utils/LoaderWrapper';

import { deleteCategory } from './actions';

import { makeSelectIsLoading, makeSelectError } from './selectors';

const DeleteCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <DeleteCategoryForm
      error={props.error}
      onCancel={props.onClosePortal}
      onDeleteCategory={props.deleteCategory}
    />
  </LoaderWrapper>
);

DeleteCategory.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  deleteCategory: PropTypes.func,
  onClosePortal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: () => makeSelectIsLoading(),
  error: () => makeSelectError(),
});

const mapDispatchToProps = {
  deleteCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(DeleteCategory);
