import Loadable from 'react-loadable';
import Loader from 'components/common/Loader';

const LoadingFollowing = Loadable({
  loader: () => import('./index'),
  loading: Loader,
});

export default LoadingFollowing;
