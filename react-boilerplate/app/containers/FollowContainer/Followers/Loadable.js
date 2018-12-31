import Loadable from 'react-loadable';
import Loader from 'components/common/Loader';

const LoadingFollowers = Loadable({
  loader: () => import('./index'),
  loading: Loader,
});

export default LoadingFollowers;
