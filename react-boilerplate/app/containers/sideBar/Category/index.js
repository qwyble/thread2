import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Menu } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PlaylistContainer from 'containers/sideBar/PlaylistContainer';

import {
  deleteCategory,
  editCategory,
} from 'containers/sideBar/CategoryContainer/actions';

import EditCategoryForm from 'components/sidebarUtilities/EditCategoryForm';
import { setCategory } from 'containers/sideBar/SideBar/actions';
import { makeSelectDisplayLists } from './selectors';


class Category extends React.Component {

  handleSelectCategory = () => {
    this.props.setCategory(this.props.category.catid);
  }

  render() {
    return(
      <div>
        <div>
          <div>
            <Menu.Item className='sideBarItem'>

              { this.props.isOwner ?
                (
                  <EditCategoryForm
                    id={this.props.category.get('catid')}
                    catname={this.props.category.get('catname')}
                    onCategoryRename={this.props.editCategory}
                    onCategoryDelete={this.props.deleteCategory}
                  />
                )
                : <div></div> }

              <Button
                icon
                inverted
                size='mini'
                color='blue'
                floated='right'
                className='button2'
                labelPosition='right'
                onClick={this.handleSelectCategory}
              >
                <Icon name={this.props.displayLists ? 'down arrow' : 'right arrow'} />
                {this.props.category.get('catname')}
              </Button>

            </Menu.Item>

            <PlaylistContainer
              displayLists={this.props.displayLists}
              playlists={this.props.category.get('pls')}
            />
          </div>
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  deleteCategory: PropTypes.func,
  editCategory: PropTypes.func,
  displayLists: PropTypes.bool,
  setCategory: PropTypes.func,
  category: PropTypes.object,
  isOwner: PropTypes.bool,
}

const mapStateToProps = () => createStructuredSelector({
  displayLists: () => makeSelectDisplayLists(),
});

const mapDispatchToProps = {
  deleteCategory,
  editCategory,
  setCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Category);
