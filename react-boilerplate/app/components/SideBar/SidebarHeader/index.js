import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';

const SidebarHeader = props => {
  console.log(props.owner.toJS());
  return (
    <div>
      {props.owner ? (
        <Link to={`/profile/${props.owner.idUsers}`}>
          <Menu.Item>
            <Image
              src={props.owner.get('imageUrl')}
              floated="left"
              size="mini"
              spaced
            />
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
