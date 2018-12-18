import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Loader } from 'semantic-ui-react';


import Playlists from 'containers/sideBar/playlists';
import AddCategory from 'containers/sideBar/addCategory';

const CategoryMapper = props => (
  <div>
    {props.categories.map((category, key) => (
      <Menu.Item className="sideItems" key={key}>
        <Playlists
          catName={category.catname}
          playLists={category.pls}
          id={category.catid}
        />
      </Menu.Item>
    ))}
    <div>
      {props.isLoading ?
        <Loader active />
        : (
          <div>
            {props.isOwner ?
              <AddCategory />
              : <div></div>}
          </div>
        )
      }
    </div>
  </div>
);

CategoryMapper.propTypes = {
  categories: PropTypes.object,
};

export default CategoryMapper;
