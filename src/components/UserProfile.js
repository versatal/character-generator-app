import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from './ProfileForm';
import { startAddProfile } from '../actions/profiles';

export class UserProfile extends React.Component {
  onSubmit = (profile) => {
    this.props.startAddProfile(profile);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Update Your Profile</h1>
          </div>
        </div>

        <div className="content-container">
          <ProfileForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  startAddProfile: (profile) => dispatch(startAddProfile(profile))
});

export default connect(undefined, mapDispatchToProps)(UserProfile);