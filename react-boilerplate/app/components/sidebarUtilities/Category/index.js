import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'semantic-ui-react';

import PlaylistContainer from 'containers/sideBar/PlaylistContainer';

import EditCategoryForm from 'components/sidebarUtilities/EditCategoryForm';

class Category extends React.Component {

  handleSelectCategory = () => {
    this.props.onSetCategory(this.props.category.catid);
  }

  render() {

    return (
      <div>
        <div>
          <div>
            <Menu.Item className="sideBarItem">

              { this.props.isOwner
                ? (
                  <EditCategoryForm
                    id={this.props.category.get('catid')}
                    catname={this.props.category.get('catname')}
                    onCategoryRename={this.props.onEditCategory}
                    onCategoryDelete={this.props.onDeleteCategory}
                  />
                )
                : <div /> }

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
  onDeleteCategory: PropTypes.func,
  onEditCategory: PropTypes.func,
  onSetCategory: PropTypes.func,
  category: PropTypes.object,
  isOwner: PropTypes.bool,
};

export default Category;
