import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../../components/common/Loader';

const LoadableProtected = Loadable({
  loader: () => import('./protected.js'),
  loading: Loader,
  render(loaded, props) {
    const Component = loaded.default;
    return <Component {...props} />;
  },
});

export default LoadableProtected;
