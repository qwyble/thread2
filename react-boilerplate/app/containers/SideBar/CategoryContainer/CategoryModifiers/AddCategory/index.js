import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import AddCategoryForm from 'components/SideBar/Categories/CategoryModifiers/AddCategoryForm';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { addCategory } from './actions';
import { makeSelectIsLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

const AddCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <AddCategoryForm onAddCategory={props.addCategory} />
  </LoaderWrapper>
);

AddCategory.propTypes = {
  isLoading: PropTypes.bool,
  addCategory: PropTypes.func.isRequired,
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

const withReducer = injectReducer({ key: 'AddCategory', reducer });
const withSaga = injectSaga({ key: 'AddCategory', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(AddCategory);
