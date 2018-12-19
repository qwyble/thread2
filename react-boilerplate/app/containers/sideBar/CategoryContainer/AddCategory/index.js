import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AddCategoryForm from 'components/sidebarUtilities/AddCategoryForm';

import { addCategory } from '../actions';

import {
  makeSelectIsCatLoading,
  makeSelectCatError,
} from './selectors';

const AddCategory = props => (
  <div>
    {props.isLoading ?
      <Loader active />
      : (
        <div>
          <AddCategoryForm
            onAddCategory={props.addCategory}
            error={props.error}
          />
        </div>
      )
    }
  </div>
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
