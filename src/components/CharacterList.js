import React from 'react';
import { connect } from 'react-redux';
import CharacterListItem from './CharacterListItem';
import selectCharacters from '../selectors/characters';

export const CharacterList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Characters</div>
      <div className="show-for-desktop">Character</div>
      <div className="show-for-desktop">Short Description</div>
    </div>
    <div className="list-body">
    {
      props.characters.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Characters</span>
        </div>
      ) : (
        props.characters.map((character) => {
          return <CharacterListItem key={character.id} {...character}/>
        })  
      )
    }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    characters: selectCharacters(state.characters, state.filters)
  }
};

export default connect(mapStateToProps)(CharacterList);