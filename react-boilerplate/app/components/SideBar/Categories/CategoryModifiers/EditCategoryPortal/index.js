import React from 'react';
import PropTypes from 'prop-types';
import { TransitionablePortal, Dropdown, Segment } from 'semantic-ui-react';

import DeleteCategory from 'containers/SideBar/CategoryContainer/CategoryModifiers/DeleteCategory';
import RenameCategory from 'containers/SideBar/CategoryContainer/CategoryModifiers/RenameCategory';

class EditCategoryPortal extends React.Component {
  state = {
    openPortal: false,
    whichPortal: undefined,
  };

  handleOpen = whichPortal => {
    this.setState({ openPortal: true, whichPortal });
  };

  handleClose = () => {
    this.setState({ openPortal: false });
  };

  handleDropdownChange = (e, d) => {
    const val = d.key;
    if (val === 3) this.handleOpen(1);
    else if (val === 1) this.handleOpen(0);
  };

  render() {
    const options = [
      { key: 0, text: '', value: '' },
      { key: 1, text: 'rename', value: 'rename' },
      { key: 2, text: 'share', value: 'share' },
      { key: 3, text: 'delete', value: 'delete' },
    ];

    const portalProps = {
      id: this.props.id,
      onClosePortal: this.handleClose,
    };

    return (
      <div>
        <Dropdown
          text=" "
          icon="ellipsis vertical"
          className="dropOverlay icon"
          options={options}
          onChange={this.handleDropdownChange}
        />

        <TransitionablePortal
          onClose={this.handleClose}
          open={this.state.openPortal}
        >
          <Segment
            style={{
              top: '10%',
              left: '15%',
              width: '14%',
              zIndex: 1000,
              position: 'fixed',
            }}
          >
            {this.state.openPortal ? (
              <div>
                {this.state.whichPortal ? (
                  <DeleteCategory {...portalProps} />
                ) : (
                  <RenameCategory {...portalProps} />
                )}
              </div>
            ) : (
              <div />
            )}
          </Segment>
        </TransitionablePortal>
      </div>
    );
  }
}

EditCategoryPortal.propTypes = {
  id: PropTypes.string,
  catname: PropTypes.string,
};

export default EditCategoryPortal;
