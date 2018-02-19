import React from 'react';

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: props.profile ? props.profile.email : '',
      firstName: props.profile ? props.profile.firstName : '',
      lastName: props.profile ? props.profile.lastName : '',
      privileges: props.profile ? props.profile.privileges : 'user',
      profilePic: props.profile ? props.profile.profilePic : 'defaultPic.jpg',
      error: ''
    };
  
  };
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onSubmit= (e) => {
    e.preventDefault();
    this.setState(() => ({ privileges: 'user', profilePic: 'defaultPic.jpg' })); 
    if (!this.state.email || !this.state.lastName) {
      this.setState(() => ({ error: 'Please provide email and last name' }));
    } else {
      this.setState(() => ({ error: '' }));
      console.log('Submitted');
      this.props.onSubmit({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        privileges: this.state.privileges,
        profilePic: this.state.profilePic
      })            
    };
  }
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
             type="text"
             className="text-input"
             placeholder={this.props.email}
             autoFocus
             value={this.state.email}
             onChange={this.onEmailChange}
          />
          <input
             type="text"
             className="text-input"
             placeholder="First Name"
             autoFocus
             value={this.state.firstName}
             onChange={this.onFirstNameChange}
          />
          <input
             type="text"
             className="text-input"
             placeholder="Last Name"
             autoFocus
             value={this.state.lastName}
             onChange={this.onLastNameChange}
          />
          <button className="button">Update Profile</button>
        </form>
    )
  }
}