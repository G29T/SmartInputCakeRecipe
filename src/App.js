import React from 'react';
import './App.css';
import CakeRecipePlanner from './components/cake-recip-planner/CakeRecipePlanner';
import ShoppingList  from './components/shopping-list/ShoppingList';
import { useCakeContext} from './context/CakeProvider'


function App() {
  const { displayShoppingList } = useCakeContext();

  return (
    <div className="App background">
      <div className="content hide-scrollbar">
        <CakeRecipePlanner />
        {displayShoppingList && <ShoppingList />}
      </div>
    </div>
  );
}

export default App;
