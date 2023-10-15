import { useState } from 'react';

import Form from './components/Form';
import Logo from './components/Logo';
import Stats from './components/Stats';
import PackingList from './components/PackingList';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
