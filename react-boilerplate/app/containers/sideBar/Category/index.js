import React from 'react';
import PropTypes from 'prop-types';
import {Button, Icon, Menu } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PlaylistContainer from 'containers/sideBar/PlaylistContainer';

import { setCategory } from 'containers/sideBar/SideBar/actions';
import { makeSelectDisplayLists } from './selectors';

import EditCategories from './EditCategory/editCategories';

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

              { this.props.isOwner ? <EditCategories /> : <div></div> }

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
                {this.props.category.get('catName')}
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
  setCategory: PropTypes.func,
  displayLists: PropTypes.bool,
  category: PropTypes.object,
  isOwner: PropTypes.bool,
}

const mapStateToProps = () => createStructuredSelector({
  displayLists: () => makeSelectDisplayLists(),
});

const mapDispatchToProps = {
  setCategory,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Category);
