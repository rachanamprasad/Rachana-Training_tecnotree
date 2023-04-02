
import React from "react";
import ItemList from "./Components/listofitems";
function App() {
  const initialItems = [
    { id: 1, name: "Paris" },
    { id: 2, name: "New York" },
    { id: 3, name: "Tokyo" },
  ];

  return (
    <div>
      <h1>My Travel Wishlist</h1>
      <ItemList items={initialItems} />
    </div>
  );
}
export default App;