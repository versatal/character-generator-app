import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCharacter } from '../actions/characters';

const CharacterListItem = ({ id, name, level, characterClass, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{name}</h3></Link> 
    <p>{level} - {characterClass}</p>
  </div>
);

export default connect()(CharacterListItem);