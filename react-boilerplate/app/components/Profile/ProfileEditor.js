import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';

import ImageUploadPortal from 'components/Profile/ImageUploadPortal';
import ProfileEditFields from 'components/Profile/ProfileEditFields';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

class ProfileEditor extends React.Component {
  state = {
    fields: { newUsername: '', newEmail: '' },
    formErrors: { email: '', username: '' },
    disabled: true,
  };

  validate = (name, value) => {
    const { formErrors } = getErrors(this.state.formErrors, name, value);
    const disabled = formErrors.email.length || formErrors.username.length;
    this.setState({ formErrors, disabled });
  };

  handleInputChange = e => {
    const { name, value } = { ...e.target };
    const fields = { ...this.state.fields };
    this.setState({ fields: { ...fields, [name]: value } });
    this.validate(name, value);
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state.newEmail, this.state.newUsername);
  };

  render() {
    return (
      <div>
        <ImageUploadPortal
          imageUrl={this.props.user.imageUrl}
          onImageUpload={this.props.onImageUpload}
          imageLoading={this.props.imageIsLoading}
        />
        <Button onClick={this.handleOpen}>Edit Profile</Button>
        <LoaderWrapper isLoading={this.props.editIsLoading}>
          <ProfileEditFields
            fields={this.state.fields}
            errors={this.state.formErrors}
            disabled={this.state.disabled}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
          />
        </LoaderWrapper>
      </div>
    );
  }
}

ProfileEditor.propTypes = {
  user: PropTypes.object,
  onImageUpload: PropTypes.func,
  imageIsLoading: PropTypes.bool,
  editIsLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default ProfileEditor;

const getErrors = (formErrors, name, value) => {
  const errs = { ...formErrors };
  switch (name) {
    case 'newUsername':
      errs.username =
        value.length > 2 ? '' : 'username must be at least 3 characters';
      return errs;
    case 'newEmail':
      errs.email = isEmail(value) ? '' : 'not a valid email';
      return errs;
    default:
      return errs;
  }
};
