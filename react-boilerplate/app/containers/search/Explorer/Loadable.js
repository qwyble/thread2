import Loadable from 'react-loadable';
import Loader from 'components/common/Loader';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loader,
});

export default LoadableComponent;
