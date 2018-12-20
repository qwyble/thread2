import React, { PropTypes } from 'react'
import { Menu } from 'semantic-ui-react';
import Category from 'containers/sideBar/Category';

const CategoryMapper = props => (
  <div>
    {props.categories.map((category, key) => (
      <Menu.Item className="sideItems" key={key}>
        <Category
          category={category}
          isOwner={props.isOwner}
          onSetCategory={this.props.onSetCategory}
          onEditCategory={this.props.onEditCategory}
          onDeleteCategory={this.props.onDeleteCategory}
        />
      </Menu.Item>
    ))}
  </div>
)

CategoryMapper.propTypes = {
  categories: PropTypes.object,
  isOwner: PropTypes.bool,
}

export default CategoryMapper;
