import React from 'react';
import BaseCard from './components/UI/BaseCard/BaseCard';
import AddUser from './components/Users/AddUser';

function App() {
  return (
    <div>
      <BaseCard>
        <AddUser />
      </BaseCard>
    </div>
  );
}

export default App;
