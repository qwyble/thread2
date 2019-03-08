import React from 'react';
import PropTypes from 'prop-types';
import VertMenu from 'components/common/Menus/VertMenu';
import MenuMapper from 'components/common/Menus/MenuMapper';

const ForumCategoriesList = ({ categories, onSelectCategory }) => (
  <VertMenu>
    <MenuMapper
      renderField="text"
      valueField="value"
      link
      to="/forum"
      as="button"
      onClick={onSelectCategory}
    >
      {categories}
    </MenuMapper>
  </VertMenu>
);

ForumCategoriesList.propTypes = {
  categories: PropTypes.object.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default ForumCategoriesList;
