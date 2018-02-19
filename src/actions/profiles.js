import uuid from 'uuid';
import database from '../firebase/firebase';
import profile from '../reducers/profile';
//add character

 export const addProfile = (profile) => ({
  type: 'ADD_PROFILE',
  profile
});

export const startAddProfile = (profileData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      email = '',
      firstName = '',
      lastName = '',
      privileges = 'user',
      profilePic = 'defaultUSerPic.jpg' 
    } = profileData;
    const profile = { email, firstName, lastName, privileges, profilePic };

    database.ref(`users/${uid}/profile`).set(profile).then((ref) => {
      dispatch(addProfile({
        ...profile
      }));
    });
  };
};

//Set Characters

export const setProfile = (profile) => ({
  type: "SET_PROFILE",
  profile
});

export const startSetProfile = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/profile`).once('value').then((snapshot) => {
      const profile = {
        ...snapshot.val()
      };
      console.log('profile id: ', profile.email);
      
      dispatch(setProfile(profile));
    }).catch((e) => {console.log('Fetch profile failed.', e)});
  };
};