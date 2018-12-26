import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RenameCategoryForm from 'components/SideBar/Categories/CategoryModifiers/RenameCategoryForm';
import LoaderWrapper from 'containers/SideBar/CategoryContainer/utils/LoaderWrapper';

import { editCategory } from './actions';

import { makeSelectIsLoading, makeSelectError } from './selectors';

const RenameCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <RenameCategoryForm
      error={props.error}
      onCancel={props.onClosePortal}
      onRenameCategory={props.editCategory}
    />
  </LoaderWrapper>
);

RenameCategory.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  editCategory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: () => makeSelectIsLoading(),
  error: () => makeSelectError(),
});

const mapDispatchToProps = {
  editCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(RenameCategory);
