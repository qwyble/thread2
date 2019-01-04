import Loadable from 'react-loadable';
import React from 'react';
import Loader from 'components/common/Loader';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loader,
  render(loaded, props) {
    const Component = loaded.default;
    return <Component {...props} />;
  },
});

export default LoadableComponent;
