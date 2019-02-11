import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

const SidebarHeader = (props) => {
  console.log('sidebar owner: ', props.owner.toJS());
  return (
    <div>
      {props.owner ? (
        <Link to={`/profile/${props.owner.get('idUsers')}`}>
          <Menu.Item>
            <div>
              <Image
                src={props.owner.get('imageUrl')}
                size="tiny"
                spaced
                style={{ paddingBottom: '5px' }}
              />
            </div>
            <div>{props.owner.get('userName')}</div>
          </Menu.Item>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

SidebarHeader.propTypes = {
  owner: PropTypes.object,
};

export default SidebarHeader;
