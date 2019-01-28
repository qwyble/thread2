import React from 'react';
import PropTypes from 'prop-types';

const ForumCategoriesList = ({ categories, onSelectCategory }) => (
  <ul>
    {categories.map((cat, i) => (
      <li key={i}>
        <button type="button" onClick={onSelectCategory} value={cat.value}>
          {cat.text}
        </button>
      </li>
    ))}
  </ul>
);

ForumCategoriesList.propTypes = {
  categories: PropTypes.object,
  onSelectCategory: PropTypes.func,
};

export default ForumCategoriesList;
