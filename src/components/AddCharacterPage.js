import React from 'react';
import { connect } from 'react-redux';
import CharacterForm from './CharacterForm';
import { startAddCharacter } from '../actions/characters';

export class AddCharacterPage extends React.Component {
  onSubmit = (character) => {
    this.props.startAddCharacter(character);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Character</h1>
          </div>
        </div>

        <div className="content-container">
          <CharacterForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  startAddCharacter: (character) => dispatch(startAddCharacter(character))
});

export default connect(undefined, mapDispatchToProps)(AddCharacterPage);