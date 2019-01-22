import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';

const PlayButtons = props => (
  <div className="col-xs-6 col-sm-8 col-md-2 play-buttons">
    <Button
      className="audioBarButton"
      inverted
      color="blue"
      icon="angle double left"
      onClick={props.skipBack}
    />

    <Button
      className="audioBarButton"
      size="mini"
      inverted
      color="blue"
      icon={props.icon}
      onClick={props.onClick}
    />

    <Button
      className="audioBarButton"
      inverted
      color="blue"
      icon="angle double right"
      onClick={props.onEnd}
    />
  </div>
);

PlayButtons.propTypes = {
  skipBack: PropTypes.func,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  onEnd: PropTypes.func,
};

export default PlayButtons;
