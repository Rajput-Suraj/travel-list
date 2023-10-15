import React from 'react';

const Item = ({ item, onDeleteItem }) => {
  const { description, quantity, packed, id } = item;
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
