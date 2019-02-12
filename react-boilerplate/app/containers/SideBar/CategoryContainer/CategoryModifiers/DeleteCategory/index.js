import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import DeleteCategoryForm from 'components/SideBar/Categories/CategoryModifiers/DeleteCategoryForm';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { deleteCategory } from './actions';
import { makeSelectIsLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

const DeleteCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <DeleteCategoryForm
      onCancel={props.onClosePortal}
      onDeleteCategory={props.deleteCategory}
    />
  </LoaderWrapper>
);

DeleteCategory.propTypes = {
  isLoading: PropTypes.bool,
  deleteCategory: PropTypes.func.isRequired,
  onClosePortal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
});

const mapDispatchToProps = {
  deleteCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'DeleteCategory', reducer });
const withSaga = injectSaga({ key: 'DeleteCategory', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(DeleteCategory);
