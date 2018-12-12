import Loadable from 'react-loadable';
import Loader from 'components/common/Loader';

const LoadableProfileContainer = Loadable({
  loader: () => import('./index'),
  loading: Loader,
});

export default LoadableProfileContainer;
