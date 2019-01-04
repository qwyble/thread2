import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';

import { setCategory } from 'containers/SideBar/SideBarContainer/actions';

import { makeSelectProfileId } from 'containers/AppUtilities/ProfileContext/selectors';
import { makeSelectSelectedCategoryId } from 'containers/SideBar/SideBarContainer/selectors';
import { makeSelectCategories, makeSelectIsLoading } from './selectors';

import CategoryMapper from './utils/CategoryMapper';
import LoaderWrapper from './utils/LoaderWrapper';
import AddCategory from './CategoryModifiers/AddCategory';

import { getCategories } from './actions';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ownerId !== this.props.ownerId) this.props.getCategories();
  }

  render() {
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <CategoryMapper
          categories={this.props.categories}
          onSetCategory={this.props.setCategory}
          selectedCategoryId={this.props.selectedCategoryId}
        />
        <IsSideBarOwner>
          <AddCategory />
        </IsSideBarOwner>
      </LoaderWrapper>
    );
  }
}

CategoryContainer.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.object,
  setCategory: PropTypes.func,
  isLoading: PropTypes.bool,
  ownerId: PropTypes.string,
  selectedCategoryId: PropTypes.string,
};

const mapStateToProps = () =>
  createStructuredSelector({
    selectedCategoryId: makeSelectSelectedCategoryId(),
    categories: makeSelectCategories(),
    isLoading: makeSelectIsLoading(),
    ownerId: makeSelectProfileId(),
  });

const mapDispatchToProps = {
  getCategories,
  setCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'CategoryContainer', reducer });
const withSaga = injectSaga({ key: 'CategoryContainer', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(CategoryContainer);
