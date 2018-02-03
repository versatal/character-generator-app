import React from 'react';
import { Link } from 'react-router-dom'

const ViewCharacterPage = (props) => (
  <div>
    This is the view character page for the character with id of {props.match.params.id}
  </div>
);

export default ViewCharacterPage;