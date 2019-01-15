import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import Category from 'components/SideBar/Categories/Category';

const CategoryMapper = props => (
  <div>
    {props.categories.map((category, key) => (
      <Menu.Item className="sideItems" key={key}>
        <Category
          category={category}
          onSetCategory={props.onSetCategory}
          selected={category.get('catid') === props.selectedCategoryId}
        />
      </Menu.Item>
    ))}
  </div>
);

CategoryMapper.propTypes = {
  categories: PropTypes.object,
  onSetCategory: PropTypes.func,
  selectedCategoryId: PropTypes.number,
};

export default CategoryMapper;
