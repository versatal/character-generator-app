import React from 'react';
import { Link } from 'react-router-dom';
import { removeCharacter } from '../actions/characters';

const CharacterListItem = ({ id, name, system, shortDescription, dispatch }) => (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{name}</h3>
        <span className="list-item__sub-title">{system}</span> 
      </div>
      <p className="list-item__data">{shortDescription}</p>
    </Link>
);

export default CharacterListItem;