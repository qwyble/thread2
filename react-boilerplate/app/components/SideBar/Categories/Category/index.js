import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'semantic-ui-react';

import IsOwner from 'containers/Wrappers/IsOwner';

import PlaylistContainer from 'containers/sideBar/PlaylistContainer';

import EditCategoryPortal from 'components/SideBar/Categories/CategoryModifiers/EditCategoryPortal';

class Category extends React.Component {
  handleSelectCategory = () => {
    this.props.onSetCategory(this.props.category.catid);
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <Menu.Item className="sideBarItem">
              <IsOwner>
                <EditCategoryPortal
                  id={this.props.category.get('catid')}
                  catname={this.props.category.get('catname')}
                />
              </IsOwner>

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

            <PlaylistContainer
              playlists={this.props.category.get('pls')}
              catId={this.props.category.get('catid')}
            />
          </div>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  onSetCategory: PropTypes.func,
  category: PropTypes.object,
};

export default Category;
