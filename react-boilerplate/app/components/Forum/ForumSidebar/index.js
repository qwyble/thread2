import React, { Component } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';

import ForumGrid from 'containers/Forum/forumGrid';
import ForumCategoryContainer from 'containers/Forum/ForumCategoryContainer';

import StyledButton from './StyledButton';
import SideBar from './SideBar';

class ForumSidebarLeftOverlay extends Component {
  state = { visible: true };

  toggleVis = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div className="primaryContainer">
        <Sidebar.Pushable as={Segment}>
          <SideBar visible={this.state.visible}>
            <ForumCategoryContainer />
          </SideBar>
          <Sidebar.Pusher>
            <StyledButton
              toggleVis={this.toggleVis}
              visibile={this.state.visible}
            />
            <ForumGrid />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default ForumSidebarLeftOverlay;
