import React from 'react';
import PropTypes from 'prop-types';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';
import PlaylistContainer from 'containers/SideBar/PlaylistContainer';
import AnimationWrapper from 'containers/Wrappers/AnimationWrapper';

import EditCategoryDropdown from 'components/SideBar/Categories/CategoryModifiers/EditCategoryDropdown';

import StyledButton from './StyledButton';
require('./css.css');

class Category extends React.Component {
  handleSelectCategory = () => {
    this.props.onSetCategory(this.props.category);
  };

  handleSetEditedCategory = whichPortal => {
    this.props.onSetEditedCategory(
      this.props.category,
      parseInt(whichPortal, 10)
    );
  };

  render() {
    return (
      <div>
        <div className="ui category-item">
          <IsSideBarOwner>
            <EditCategoryDropdown
              id={this.props.category.get('catid')}
              catname={this.props.category.get('catname')}
              onSetEditedCategory={this.handleSetEditedCategory}
            />
          </IsSideBarOwner>
          <StyledButton onClick={this.handleSelectCategory}>
            {this.props.category.get('catname')}
          </StyledButton>
        </div>
        <AnimationWrapper displayLists={this.props.isSelected}>
          <PlaylistContainer
            playlists={this.props.category.get('pls')}
            catId={this.props.category.get('catid')}
          />
        </AnimationWrapper>
      </div>
    );
  }
}

Category.propTypes = {
  onSetCategory: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSetEditedCategory: PropTypes.func.isRequired,
};

export default Category;
