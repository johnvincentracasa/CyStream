import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
        this.props.signIn(this.auth.currentUser.get().getId());
      } else {
        this.props.signOut();
      }
    };

    this.onSignInClick = () => {
      this.auth.signIn();
    };

    this.onSignOutClick = () => {
      this.auth.signOut();
    };
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        // init() method returns a promise
        .init({
          clientId:
            '1068608466231-najpevgdpp8s086mu7p0m655ln768ll8.apps.googleusercontent.com',
          scope: 'email',
        })

        // .then is used becuse fo the promise in the .init()
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  renderedAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui button google red" onClick={this.onSignOutClick}>
          <i className="google icon"></i>
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui button google green" onClick={this.onSignInClick}>
          <i className="google icon"> </i>
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div className="item">{this.renderedAuthButton()}</div>;
  }
}

const MapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(MapStateToProps, { signIn, signOut })(GoogleAuth);
