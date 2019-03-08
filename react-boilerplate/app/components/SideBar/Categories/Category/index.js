import React from 'react';
import PropTypes from 'prop-types';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';
import PlaylistContainer from 'containers/SideBar/PlaylistContainer';
import AnimationWrapper from 'containers/Wrappers/AnimationWrapper';

import EditCategoryPortal from 'components/SideBar/Categories/CategoryModifiers/EditCategoryPortal';

import StyledButton from './StyledButton';
require('./css.css');

class Category extends React.Component {
  handleSelectCategory = () => {
    this.props.onSetCategory(this.props.category);
  };

  render() {
    return (
      <div>
        <div className="ui category-item">
          <IsSideBarOwner>
            <EditCategoryPortal
              id={this.props.category.get('catid')}
              catname={this.props.category.get('catname')}
            />
          </IsSideBarOwner>
          <StyledButton onClick={this.handleSelectCategory}>
            {this.props.category.get('catname')}
          </StyledButton>
        </div>
        <AnimationWrapper displayLists={this.props.selected}>
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
  selected: PropTypes.bool,
};

export default Category;
