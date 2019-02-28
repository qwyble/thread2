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
    disabled: true,
  };

  validate = e => {
    const { name, value } = e.target;
    if (name === 'comment') {
      if (value.length < 8) {
        this.setState({
          [name]: { value, error: 'comment must be >= 8 characters' },
          disabled: true,
        });
      } else if (value.length > 500) {
        this.setState({
          [name]: { value, error: 'comment must be <= 500 characters' },
          disabled: true,
        });
      } else {
        this.setState({ [name]: { value, error: '' }, disabled: false });
      }
    }
  };

  handleCommentSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.comment.value);
  };

  render() {
    return (
      <Segment>
        <LoaderWrapper isLoading={this.props.isLoading}>
          <form onSubmit={this.handleCommentSubmit}>
            <div className="form-group">
              <textarea
                rows="10"
                name="comment"
                value={this.state.comment.value}
                required
                onChange={this.validate}
              />

              <div className="help-block">{this.state.comment.error}</div>
            </div>
            <Button disabled={this.state.disabled} type="submit">
              Submit
            </Button>
            <Button onClick={this.props.onCloseModal}>Cancel</Button>
          </form>
        </LoaderWrapper>
      </Segment>
    );
  }
}

AddCommentForm.propTypes = {
  isLoading: PropTypes.bool,
  onCloseModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddCommentForm;
