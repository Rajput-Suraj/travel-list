import React from 'react';

const Item = ({ item, onDeleteItem, onToggleItems }) => {
  const { description, quantity, packed, id } = item;

  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onToggleItems(id)} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
