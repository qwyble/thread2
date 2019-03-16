import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import Category from 'components/SideBar/Categories/Category';

require('./css.css');

const CategoryMapper = props => (
  <div>
    {props.categories.map(category => {
      const isSelected = category.get('catid') === props.selectedCategoryId;
      return (
        <Menu.Item
          className={
            isSelected ? 'category menuItem selected' : 'category menuItem'
          }
          key={category.get('catid')}
        >
          <Category
            category={category}
            onSetCategory={props.onSetCategory}
            isSelected={isSelected}
            onSetEditedCategory={props.onSetEditedCategory}
          />
        </Menu.Item>
      );
    })}
  </div>
);

CategoryMapper.propTypes = {
  categories: PropTypes.object.isRequired,
  onSetCategory: PropTypes.func.isRequired,
  selectedCategoryId: PropTypes.number,
  onSetEditedCategory: PropTypes.func.isRequired,
};

export default CategoryMapper;
