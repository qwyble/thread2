import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AddCategoryForm from 'components/sidebarUtilities/AddCategoryForm';
import LoaderWrapper from 'containers/sideBar/CategoryContainer/LoaderWrapper';

import { addCategory } from '../actions';

import {
  makeSelectIsCatLoading,
  makeSelectCatError,
} from './selectors';

const AddCategory = props => (
  <LoaderWrapper isLoading={props.isLoading}>
    <AddCategoryForm onAddCategory={props.addCategory} error={props.error} />
  </LoaderWrapper>
)

AddCategory.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  addCategory: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: () => makeSelectIsCatLoading(),
  error: () => makeSelectCatError(),
})

const mapDispatchToProps = {
  addCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddCategory);
