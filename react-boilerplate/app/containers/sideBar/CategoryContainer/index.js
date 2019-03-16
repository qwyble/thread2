import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { makeSelectProfileId } from 'containers/AppUtilities/ProfileContext/selectors';
import { setEditedCategory } from 'containers/SideBar/CategoryContainer/CategoryModifiers/EditCategoryPortal/actions';
import EditCategoryPortal from 'containers/SideBar/CategoryContainer/CategoryModifiers/EditCategoryPortal';

import CategoryMapper from './utils/CategoryMapper';
import AddCategory from './CategoryModifiers/AddCategory';

import {
  makeSelectSelectedCategoryId,
  makeSelectCategories,
  makeSelectIsLoading,
} from './selectors';
import { getCategories, setCategory } from './actions';
import saga from './saga';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ownerId !== this.props.ownerId) {
      this.props.getCategories();
    }
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <CategoryMapper
          categories={this.props.categories}
          onSetCategory={this.props.setCategory}
          selectedCategoryId={this.props.selectedCategoryId}
          onSetEditedCategory={this.props.setEditedCategory}
        />
        <IsSideBarOwner>
          <AddCategory />
          <EditCategoryPortal />
        </IsSideBarOwner>
      </LoaderWrapper>
    );
  }
}

CategoryContainer.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  ownerId: PropTypes.number.isRequired,
  selectedCategoryId: PropTypes.number,
  setEditedCategory: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  ownerId: makeSelectProfileId(),
  selectedCategoryId: makeSelectSelectedCategoryId(),
  isLoading: makeSelectIsLoading(),
});

const mapDispatchToProps = {
  getCategories,
  setCategory,
  setEditedCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'CategoryContainer', saga });

export default compose(
  withSaga,
  withConnect
)(CategoryContainer);
