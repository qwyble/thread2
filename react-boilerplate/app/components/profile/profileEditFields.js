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
  Icon,
} from 'semantic-ui-react';
import ModalWrapper from 'components/common/ModalWrapper';

const ProfileEditFields = props => (
  <ModalWrapper
    centered="true"
    dimmer={false}
    className="profileModal"
    closeIcon={
      <Button icon>
        <Icon name="close" />
      </Button>
    }
    trigger={<Button>Edit Profile</Button>}
    style={{ width: '30vw' }}
  >
    <div>
      <Modal.Content>
        <Container>
          <Segment>
            <Form>
              <Form.Field>
                <Label>New Email</Label>
                <Input
                  name="newEmail"
                  value={props.fields.newEmail}
                  onChange={props.onInputChange}
                />
                <div>{props.errors.email}</div>
              </Form.Field>
              <Form.Field>
                <Label>New Username</Label>
                <Input
                  name="newUsername"
                  value={props.fields.newUsername}
                  onChange={props.onInputChange}
                />
                <div>{props.errors.username}</div>
              </Form.Field>
              <Button
                type="submit"
                disabled={props.disabled}
                onClick={props.onSubmit}
              >
                Submit
              </Button>
            </Form>
          </Segment>
        </Container>
      </Modal.Content>
    </div>
  </ModalWrapper>
);

ProfileEditFields.propTypes = {
  errors: PropTypes.object,
  fields: PropTypes.object,
  onInputChange: PropTypes.func,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default ProfileEditFields;
