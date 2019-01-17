import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import RenameCategoryForm from 'components/SideBar/Categories/CategoryModifiers/RenameCategoryForm';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { editCategory } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectIsLoading } from './selectors';

const RenameCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <RenameCategoryForm
      onCancel={props.onClosePortal}
      onRenameCategory={props.editCategory}
    />
  </LoaderWrapper>
);

RenameCategory.propTypes = {
  isLoading: PropTypes.bool,
  editCategory: PropTypes.func,
  onClosePortal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
});

const mapDispatchToProps = {
  editCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'RenameCategory', reducer });
const withSaga = injectSaga({ key: 'RemoveCategory', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(RenameCategory);
