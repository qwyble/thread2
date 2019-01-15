import React from 'react';
import { Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = props => {
  console.log(props);
  return (
    <div>
      <SemanticLoader active />
    </div>
  );
};

export default Loader;
