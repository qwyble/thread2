import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';
import PlaylistContainer from 'containers/SideBar/PlaylistContainer';
import AnimationWrapper from 'containers/Wrappers/AnimationWrapper';
import PropChecker from 'components/common/Conditional/PropChecker';

import EditCategoryPortal from 'components/SideBar/Categories/CategoryModifiers/EditCategoryPortal';

import StyledButton from './StyledButton';

class Category extends React.Component {
  handleSelectCategory = () => {
    this.props.onSetCategory(this.props.category);
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <Menu.Item className="sideBarItem">
              <IsSideBarOwner>
                <EditCategoryPortal
                  id={this.props.category.get('catid')}
                  catname={this.props.category.get('catname')}
                />
              </IsSideBarOwner>

              <StyledButton onClick={this.handleSelectCategory}>
                {this.props.category.get('catname')}
              </StyledButton>
            </Menu.Item>
            <PropChecker field={this.props.selected}>
              <AnimationWrapper displayLists={this.props.selected}>
                <PlaylistContainer
                  playlists={this.props.category.get('pls')}
                  catId={this.props.category.get('catid')}
                />
              </AnimationWrapper>
            </PropChecker>
          </div>
        </div>
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
