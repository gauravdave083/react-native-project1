import React, { createContext, useState, useEffect } from 'react';

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch restaurants from API on component mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('api_endpoint');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
