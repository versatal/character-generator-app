import React from 'react';
import { connect } from 'react-redux';
import CharacterListItem from './CharacterListItem';
import selectCharacters from '../selectors/characters';

export const CharacterList = (props) => (
  <div>
    <h1>Character List</h1>
    {
      props.characters.length === 0 ? (
        <p>No Characters</p>
      ) : (
        props.characters.map((character) => {
          return <CharacterListItem key={character.id} {...character}/>
        })  
      )
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    characters: selectCharacters(state.characters, state.filters)
  }
};

export default connect(mapStateToProps)(CharacterList);