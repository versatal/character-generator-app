import React from 'react';
import CharacterList from './CharacterList';
import CharacterListFilters from './CharacterListFilters';

const CharacterDashboardPage = () => (
  <div>
    <CharacterListFilters />    
    <CharacterList />    
  </div>
);

export default CharacterDashboardPage;