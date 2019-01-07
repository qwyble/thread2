import React, { PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';
import Category from 'components/SideBar/Categories/Category';

const CategoryMapper = props => (
  <div>
    {props.categories.map((category, key) => (
      <Menu.Item className="sideItems" key={key}>
        <Category
          category={category}
          onSetCategory={this.props.onSetCategory}
        />
      </Menu.Item>
    ))}
  </div>
);

CategoryMapper.propTypes = {
  categories: PropTypes.object,
};

export default CategoryMapper;
