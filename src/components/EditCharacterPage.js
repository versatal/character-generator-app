import React from 'react';
import { connect } from 'react-redux';
import CharacterForm from './CharacterForm';
import { removeCharacter, editCharacter } from '../actions/characters';

export class EditCharacterPage extends React.Component {
  onSubmit = (character) => {
    this.props.editCharacter(props.character.id, character);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.removeCharacter({ id: props.character.id })
    this.props.history.push('/');                    
  }
  render() {
    return (
      <div>
        <CharacterForm
          character={this.props.character}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button> 
      </div>
      
    )
  }
}  
const mapDispatchToProps = (dispatch, props) => ({
  editCharacter: (id, character) => dispatch(editCharacter(id, character)),
  removeCharacter: (data) => dispatch(removeCharacter(data)) 
});

const mapStateToProps = (state, props) => {
  return {
    character: state.characters.find((character) => character.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCharacterPage);




