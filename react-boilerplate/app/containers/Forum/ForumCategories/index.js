import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';
import ForumCategoriesList from 'components/Forum/ForumGrid/ForumCategoriesList';

import { makeSelectCategories, makeSelectIsLoading } from './selectors';
import { getCategories, setCategory } from './actions';
import reducer from './reducer';
import saga from './saga';

class ForumCategories extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
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
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
  setCategory: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
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
