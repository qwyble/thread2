import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Container,
  Input,
  Form,
  Modal,
  Label,
  Button,
} from 'semantic-ui-react';
import ModalWrapper from 'components/common/ModalWrapper';

const ProfileEditFields = props => (
  <ModalWrapper
    centered="true"
    trigger={<Button>Edit Profile</Button>}
    style={{ width: '30vw', height: '30vh' }}
  >
    <div className="container">
      <Segment>
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <div className="ui input">
              <input
                id="newEmail"
                placeholder="New Email"
                value={props.fields.newEmail}
                onChange={props.onInputChange}
              />
            </div>
            <div>{props.errors.email}</div>
          </div>
          <div className="form-group">
            <div className="ui input">
              <input
                id="newUsername"
                placeholder="New Username"
                value={props.fields.newUsername}
                onChange={props.onInputChange}
              />
            </div>
            <div>{props.errors.username}</div>
          </div>
          <Button type="submit" disabled={props.disabled}>
            Submit
          </Button>
        </form>
      </Segment>
    </div>
  </ModalWrapper>
);

ProfileEditFields.propTypes = {
  errors: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileEditFields;
