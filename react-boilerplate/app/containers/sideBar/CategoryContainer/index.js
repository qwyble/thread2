import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

import { setCategory } from 'containers/SideBar/CategoryContainer/actions';
import { makeSelectProfileId } from 'containers/AppUtilities/ProfileContext/selectors';
import { makeSelectSelectedCategoryId } from 'containers/SideBar/CategoryContainer/selectors';

import CategoryMapper from './utils/CategoryMapper';
import AddCategory from './CategoryModifiers/AddCategory';

import { makeSelectCategories, makeSelectIsLoading } from './selectors';
import { getCategories } from './actions';
import reducer from './reducer';
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
    console.log('in cat container');
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
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  ownerId: PropTypes.number.isRequired,
  selectedCategoryId: PropTypes.number,
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
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'CategoryContainer', reducer });
const withSaga = injectSaga({ key: 'CategoryContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(CategoryContainer);
