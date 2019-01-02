import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';

const PlayButtons = props => (
  <span>
    <Grid.Column width={2}>
      <Button
        inverted
        color="blue"
        icon="angle double left"
        onClick={props.skipBack}
      />

      <Button
        size="mini"
        inverted
        color="blue"
        icon={props.icon}
        onClick={props.onClick}
      />

      <Button
        inverted
        color="blue"
        icon="angle double right"
        onClick={props.onEnd}
      />
    </Grid.Column>
  </span>
);

PlayButtons.propTypes = {
  skipBack: PropTypes.func,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  onEnd: PropTypes.func,
};

export default PlayButtons;
