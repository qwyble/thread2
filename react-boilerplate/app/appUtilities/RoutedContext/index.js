import React from 'react';
import { Loader } from 'semantic-ui-react';
import FetchCategories from 'containers/sideBar/fetchCategories';
import { AppContext } from '../ownerContext';

// when the component mounts or updates,
// if the profile being viewed has changed,
// tell fetchCategories. FetchCategoies will
// then use profile to render categories and set
// owner based on categories rendered
class RoutedContext extends React.Component {
  state = {
    profile: '',
  };

  componentDidMount() {
    this.getProfile();
  }

  componentDidUpdate() {
    this.getProfile();
  }

  getProfile = () => {
    if (this.props.match.path.includes('/profile')) {
      if (this.props.match.params.profile !== this.state.profile) {
        const profile = this.props.match.params.profile;
        this.setState({ profile });
      }
    } else if (
      this.props.match.path === '/stream' ||
      this.props.match.path === '/edit'
    ) {
      if (this.state.profile !== '') {
        this.setState({ profile: '' });
      }
    }
  };

  render() {
    return (
      <AppContext.Consumer>
        {context => {
          if (context.user)
            return (
              <FetchCategories
                user={context.user}
                profile={this.state.profile}
                isOwner={context.isOwner}
                setOwner={context.onSetOwner}
              />
            );
          return <Loader active />;
        }}
      </AppContext.Consumer>
    );
  }
}
export default RoutedContext;
