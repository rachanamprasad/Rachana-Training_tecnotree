import React, { useState } from "react";

function ItemList({ items }) {
  const [addPlace, setAddPlace] = useState("");

  const handleAddPlaceChange = (event) => {
    setAddPlace(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlace = {
      id: items.length + 1,
      name: addPlace,
    };
    setAddPlace("");
    items.push(newPlace);
    console.log("New Place Added: ", newPlace);
  };
  const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <label>
        Add Place:
        <input type="text" value={addPlace} onChange={handleAddPlaceChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default ItemList;
