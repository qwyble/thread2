import Loadable from 'react-loadable';
import Loader from 'components/common/Loader';

const LoadableFollowing = Loadable({
  loader: () => import('./index'),
  loading: Loader,
});

export default LoadableFollowing;
