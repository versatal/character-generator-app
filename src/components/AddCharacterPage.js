import React from 'react';
import { connect } from 'react-redux';
import CharacterForm from './CharacterForm';
import { addCharacter } from '../actions/characters';

export class AddCharacterPage extends React.Component {
  onSubmit = (character) => {
    this.props.addCharacter(character);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Add Character</h1>
        <CharacterForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  addCharacter: (character) => dispatch(addCharacter(character))
});

export default connect(undefined, mapDispatchToProps)(AddCharacterPage);