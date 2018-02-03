import React from 'react';
import CharacterList from './CharacterList';
import CharacterListFilters from './CharacterListFilters';

const VaultDashboardPage = () => (
  <div>
    <CharacterListFilters />    
    <CharacterList />    
  </div>
);

export default VaultDashboardPage;