import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout, profile }) => (
  
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Character Vault</h1>
        </Link>
        <div className="header__content">
        <button className="button button--link" onClick={startLogout}>Logout</button>
        {profile === {} 
          ? <Link className="header__title" to="/profile"><h1>Update Profile</h1></Link>
          : <Link className="header__title" to="/profile">
              <img className="header__profilePic" src={`/images/${profile.profilePic}`} />
            </Link> 
        }
      </div>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state, props) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);