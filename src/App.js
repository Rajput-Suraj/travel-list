import { useState } from 'react';

import Form from './components/Form';
import Logo from './components/Logo';
import Stats from './components/Stats';
import PackingList from './components/PackingList';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((currItem) => currItem.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
