import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import Category from 'components/SideBar/Categories/Category';

const CategoryMapper = props => (
  <div>
    {props.categories.map(category => (
      <Menu.Item style={{ padding: '0' }} key={category.get('catid')}>
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
  categories: PropTypes.object.isRequired,
  onSetCategory: PropTypes.func,
  selectedCategoryId: PropTypes.number,
};

export default CategoryMapper;
