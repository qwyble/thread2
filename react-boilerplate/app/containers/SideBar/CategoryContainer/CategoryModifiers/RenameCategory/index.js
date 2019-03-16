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
      id={props.id}
      onCancel={props.onClosePortal}
      onRenameCategory={props.editCategory}
      catname={props.catname}
    />
  </LoaderWrapper>
);

RenameCategory.propTypes = {
  id: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  editCategory: PropTypes.func.isRequired,
  onClosePortal: PropTypes.func.isRequired,
  catname: PropTypes.string.isRequired,
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
const withSaga = injectSaga({ key: 'RenameCategory', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(RenameCategory);
