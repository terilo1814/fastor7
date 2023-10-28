import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Restaurants } from "./components/Restaurants";
import { AuthHandler } from "./components/AuthHandler";
import { Description } from "./components/Description";

function App() {
  const restaurantList = [
    {
      id: 1,
      name: 'Restaurant A',
      items: ['Cakes', 'Pastries', 'Muffins'],
      rating: 4.5,
      location: 'Connaught Place, New Delhi',
      price: `$200`,
      image: require('./assets/images/cake.jpg'),
      desc: `Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate 
        chip cream and a layer of dark chocolate ganache`
    },
    {
      id: 2,
      name: 'Restaurant B',
      items: ['Momo', 'Pizza', 'Chow'],
      rating: 4.2,
      location: 'Bandra, Mumbai',
      price: `$170`,
      image: require('./assets/images/momo.jpg'),
      desc: `Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate 
        chip cream and a layer of dark chocolate ganache`
    },
    {
      id: 3,
      name: 'Restaurant C',
      items: ['Burger', 'Butter-chicken'],
      rating: 4.3,
      location: 'Whitefield, Bangalore',
      price: `$180`,
      image: require('./assets/images/Butter-Chicken.jpg'),
      desc: `Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate 
        chip cream and a layer of dark chocolate ganache`
    },
    {
      id: 4,
      name: 'Restaurant D',
      items: ['Pasta', 'Croissant', 'Cakes'],
      rating: 4.1,
      location: '456 Elm St, New Delhi',
      price: `$150`,
      image: require('./assets/images/croissant.jpg'),
      desc: `Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate 
        chip cream and a layer of dark chocolate ganache`
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<AuthHandler />} />
      <Route exact path='/restaurant-list' element={<Restaurants restaurantList={restaurantList} />} />
      <Route path='/restaurant-desc' element={<Description restaurantList={restaurantList} />} />
    </Routes>
  );
}

export default App;
