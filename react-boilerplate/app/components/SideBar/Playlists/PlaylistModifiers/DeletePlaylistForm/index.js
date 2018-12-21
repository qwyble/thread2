import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button } from 'semantic-ui-react';
import LoaderWrapper from 'containers/Wrappers/LoaderWrapper';

const DeletePlaylistForm = props => (
  <div>
    <Segment
      style={{
        top: '10%',
        left: '15%',
        width: '14%',
        zIndex: 1000,
        position: 'fixed',
      }}
    >
      <LoaderWrapper isLoading={props.isLoading}>
        <p>
          Are you sure you want to delete the
          {props.playlist}
          playlist?
        </p>
        <Button onClick={props.onDelete}>yes</Button>
        <Button onClick={props.onCancel}>no</Button>
      </LoaderWrapper>
    </Segment>
  </div>
);

DeletePlaylistForm.propTypes = {
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  isLoading: PropTypes.bool,
  playlist: PropTypes.string,
};

export default DeletePlaylistForm;
