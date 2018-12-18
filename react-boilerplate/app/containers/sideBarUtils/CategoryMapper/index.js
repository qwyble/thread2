import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectCategories } from 'containers/sideBar/SideBar/selectors';

import { getCategories } from 'containers/sideBar/SideBar/actions';

import Playlists from '../../sideBar/playlists.js';

class CategoryMapper extends React.Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return(
      <div>
        {this.props.categories.map((category, key) => (
          <Menu.Item className='sideItems' key={key}>
            <Playlists
              catName={category.catname}
              playLists={category.pls}
              id={category.catid}
            />
          </Menu.Item>
        ))}
      </div>
    )
  }
}

CategoryMapper.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  categories: () => makeSelectCategories(),
});

const mapDispatchToProps = {
  getCategories,
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CategoryMapper);
