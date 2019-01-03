import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'semantic-ui-react';

import IsSideBarOwner from 'containers/Wrappers/IsSideBarOwner';

import PlaylistContainer from 'containers/SideBar/PlaylistContainer';

import EditCategoryPortal from 'components/SideBar/Categories/CategoryModifiers/EditCategoryPortal';

import AnimationWrapper from 'containers/Wrappers/AnimationWrapper';

class Category extends React.Component {
  handleSelectCategory = () => {
    this.props.onSetCategory(this.props.category);
  };

  render() {
    const displayLists =
      this.props.selectedCategoryId === this.props.category.get('catId');

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

              <Button
                icon
                inverted
                size="mini"
                color="blue"
                floated="right"
                className="button2"
                labelPosition="right"
                onClick={this.handleSelectCategory}
              >
                {this.props.category.get('catname')}
              </Button>
            </Menu.Item>

            {displayLists ? (
              <AnimationWrapper displayLists={displayLists}>
                <PlaylistContainer
                  playlists={this.props.category.get('pls')}
                  catId={this.props.category.get('catid')}
                />
              </AnimationWrapper>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  selectedCategoryId: PropTypes.string,
  onSetCategory: PropTypes.func,
  category: PropTypes.object,
};

export default Category;
