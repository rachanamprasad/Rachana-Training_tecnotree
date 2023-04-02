
import React from 'react';
import Slideshow from './Components/slideshow';

function App() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gfnKdSGOyErClso-7b3r17C5iugt_uPLPQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRbkPQorcyVSTAPO7c8tXLnQ98P98EqouEw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeiPwWPryYsoNlDaFhG-MdirPzo6j8w2EZA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsP8_1ToaqDAFGT_PTrngvEMEEfAmffaC58Q&usqp=CAU',
  ];

  return (
    <div>
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default App;