import React from 'react';
import { Loader } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RenderAddCategory from 'components/sidebarUtilities/renderAddCategory';

import { handleAddCategory } from 'containers/sideBar/SideBar/actions';

import {
  makeSelectIsAddCatLoading,
  makeSelectAddCatError,
} from './selectors';



const AddCategory = props => (
  <div>
    {this.props.isLoading?
      <Loader active />
      : (
        <div>
          <RenderAddCategory
            onAddCategory={this.props.handleAddCategory}
            error={this.props.error}
          />
        </div>
      )
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  isLoading: () => makeSelectIsAddCatLoading(),
  error: () => makeSelectAddCatError(),
})

const mapDispatchToProps = {
  handleAddCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddCategory);
