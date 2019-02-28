import React from 'react';
import PropTypes from 'prop-types';

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
    const formErrors = getErrors(this.state.formErrors, name, value);
    const disabled = !!formErrors.email.length || !!formErrors.username.length;
    this.setState({ formErrors, disabled });
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    const fields = { ...this.state.fields };
    this.setState({ fields: { ...fields, [id]: value } });
    this.validate(id, value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(
      this.state.fields.newEmail,
      this.state.fields.newUsername
    );
  };

  render() {
    return (
      <div className="container">
        <ImageUploadPortal
          imageUrl={this.props.imageUrl}
          onImageUpload={this.props.onImageUpload}
          imageLoading={this.props.imageIsLoading}
        />
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
  imageUrl: PropTypes.string,
  onImageUpload: PropTypes.func.isRequired,
  imageIsLoading: PropTypes.bool.isRequired,
  editIsLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ProfileEditor.defaultProps = {
  imageUrl: '',
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
