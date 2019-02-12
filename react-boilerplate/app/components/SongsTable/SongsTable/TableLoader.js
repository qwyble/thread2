import React from 'react';
import Loader from 'components/common/Loader';

const TableLoader = props => {
  if (props.isLoading) {
    return (
      <tbody>
        <tr>
          <td>
            <Loader active />{' '}
          </td>
        </tr>
      </tbody>
    );
  } else {
    return props.children;
  }
};

export default TableLoader;
