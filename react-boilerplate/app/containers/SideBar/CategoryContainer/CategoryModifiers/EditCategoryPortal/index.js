import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import Portal from 'components/common/Modals/Portal';
import PropChecker from 'components/common/Conditional/PropChecker';

import DeleteCategory from 'containers/SideBar/CategoryContainer/CategoryModifiers/DeleteCategory';
import RenameCategory from 'containers/SideBar/CategoryContainer/CategoryModifiers/RenameCategory';

import {
  makeSelectWhichPortal,
  makeSelectEditedCategoryId,
  makeSelectEditedCategoryName,
  makeSelectIsOpen,
} from './selectors';
import { setEditedCategory } from './actions';
import reducer from './reducer';

class EditCategoryPortal extends React.Component {
  handleClosePortal = () => {
    this.props.setEditedCategory(fromJS({}), -1);
  };

  render() {
    const portalProps = {
      id: this.props.catid,
      catname: this.props.catname,
      onClosePortal: this.handleClosePortal,
    };

    return (
      <Portal
        centered
        dimmer
        onClose={this.handleClosePortal}
        isOpen={this.props.isOpen}
      >
        <PropChecker field={this.props.isOpen}>
          {this.props.whichPortal === 2 && <DeleteCategory {...portalProps} />}
          {this.props.whichPortal === 0 && <RenameCategory {...portalProps} />}
        </PropChecker>
      </Portal>
    );
  }
}

EditCategoryPortal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  catid: PropTypes.number,
  catname: PropTypes.string,
  whichPortal: PropTypes.number.isRequired,
  setEditedCategory: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  whichPortal: makeSelectWhichPortal(),
  isOpen: makeSelectIsOpen(),
  catid: makeSelectEditedCategoryId(),
  catname: makeSelectEditedCategoryName(),
});

const mapDispatchToProps = {
  setEditedCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'EditCategoryPortal', reducer });

export default compose(
  withReducer,
  withConnect
)(EditCategoryPortal);
