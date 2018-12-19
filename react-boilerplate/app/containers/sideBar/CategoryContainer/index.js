import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Loader } from 'semantic-ui-react';


import Category from 'containers/sideBar/Category';
import AddCategory from 'containers/sideBar/AddCategory';

const CategoryContainer = props => (
  <div>
    {props.categories.map((category, key) => (
      <Menu.Item className="sideItems" key={key}>
        <Category
          category={category}
          isOwner={props.isOwner}
        />
      </Menu.Item>
    ))}
    <div>
      {props.isLoading ?
        <Loader active />
        : (
          <div>
            {props.isOwner ? <AddCategory /> : <div></div>}
          </div>
        )
      }
    </div>
  </div>
);

CategoryContainer.propTypes = {
  categories: PropTypes.object,
  isLoading: PropTypes.bool,
  isOwner: PropTypes.bool,
};

export default CategoryContainer;
