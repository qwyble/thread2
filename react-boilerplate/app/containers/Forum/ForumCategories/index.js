import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import ForumCategoriesList from 'components/Forum/ForumSidebar/ForumCategoriesList';

import { setCategory } from 'containers/SideBar/SideBarContainer/actions';

import { makeSelectCategories, makeSelectIsLoading } from './selectors';
import { getCategories } from './actions';
import reducer from './reducer';
import saga from './saga';

class ForumCategories extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    console.log(this.props.categories.toJS());
    return (
      <LoaderWrapper isLoading={this.props.isLoading}>
        <ForumCategoriesList
          categories={this.props.categories}
          onSelectCategory={this.props.setCategory}
        />
      </LoaderWrapper>
    );
  }
}

ForumCategories.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.object,
  setCategory: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = () =>
  createStructuredSelector({
    categories: makeSelectCategories(),
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

const withReducer = injectReducer({ key: 'ForumCategoriesContainer', reducer });
const withSaga = injectSaga({ key: 'ForumCategoriesContainer', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect
)(ForumCategories);
