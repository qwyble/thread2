import React, { Component } from 'react';

import Forum from 'components/Forum';
import ForumCategories from 'containers/Forum/ForumCategories';

require('./css.css');

class ForumSidebar extends Component {
  state = { visible: true };

  toggleVis = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div>
        <nav className="forum-sidebar">
          <ForumCategories />
        </nav>
        <Forum />
      </div>
    );
  }
}

export default ForumSidebar;
