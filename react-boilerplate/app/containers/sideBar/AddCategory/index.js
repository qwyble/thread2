import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AddCategoryForm from 'components/sidebarUtilities/AddCategoryForm';

import { addCategory } from 'containers/sideBar/SideBar/actions';

import {
  makeSelectIsAddCatLoading,
  makeSelectAddCatError,
} from './selectors';

const AddCategory = props => (
  <div>
    {props.isLoading ?
      <Loader active />
      : (
        <div>
          <AddCategoryForm
            onAddCategory={props.onAddCategory}
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
  isLoading: () => makeSelectIsAddCatLoading(),
  error: () => makeSelectAddCatError(),
})

const mapDispatchToProps = {
  addCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddCategory);
