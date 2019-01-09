import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TextComponent = props => (
  <div>
    <Form.TextArea
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
    {props.error}
  </div>
);

TextComponent.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextComponent;
