import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Button } from 'semantic-ui-react';

import TextComponent from 'components/common/Input/TextArea';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

class AddCommentForm extends React.Component {
  state = {
    comment: {
      value: '',
      error: '',
    },
  };

  validate = e => {
    const { name, value } = { ...e.target };
    if (name === 'comment') {
      if (value.length < 8) {
        this.setState({
          [name]: { value, error: 'comment must be >= 8 characters' },
        });
      }
      this.setState({ [name]: { value, error: '' } });
    }
  };

  handleCommentSubmit = () => {
    this.props.onSubmit(this.state.comment.value);
  };

  render() {
    const disabled = Object.values(this.state).find(
      field => field.error.legnth
    );
    return (
      <Segment>
        <LoaderWrapper isLoading={this.props.isLoading}>
          <Form onSubmit={this.handleCommentSubmit}>
            <Form.Field error={this.state.comment.error}>
              <TextComponent
                name="comment"
                value={this.state.comment.value}
                error={this.state.comment.error}
                onChange={this.validate}
              />
            </Form.Field>
            <Button disabled={disabled} type="submit">
              Submit
            </Button>
            <Button onClick={this.props.onCloseModal}>Cancel</Button>
          </Form>
        </LoaderWrapper>
      </Segment>
    );
  }
}

AddCommentForm.propTypes = {
  isLoading: PropTypes.bool,
  onCloseModal: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddCommentForm;
