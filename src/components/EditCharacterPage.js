import React from 'react';
import { connect } from 'react-redux';
import CharacterForm from './CharacterForm';
import { StartRemoveCharacter, startEditCharacter } from '../actions/characters';

export class EditCharacterPage extends React.Component {
  onSubmit = (character) => {
    this.props.startEditCharacter(this.props.character.id, character);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.startRemoveCharacter({ id: this.props.character.id })
    this.props.history.push('/');                    
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Character</h1>
          </div>
        </div>

        <div className="content-container">
          <CharacterForm
            character={this.props.character}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Character</button> 
        </div>
      </div>
      
    )
  }
}  
const mapDispatchToProps = (dispatch, props) => ({
  startEditCharacter: (id, character) => dispatch(startEditCharacter(id, character)),
  startRemoveCharacter: (data) => dispatch(startRemoveCharacter(data)) 
});

const mapStateToProps = (state, props) => {
  return {
    character: state.characters.find((character) => character.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCharacterPage);




