import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatFacts = () => {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    fetchCatFacts();
  }, []);

  const fetchCatFacts = async () => {
    try {
      const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?amount=3');
      setCatFacts(response.data);
    } catch (error) {
      console.error('Error fetching cat facts:', error);
    }
  };


  return (
    <div>
      <h1> Cat Facts</h1>
      <button onClick={fetchCatFacts}>Get New Cat Facts</button>
      <ul>
        {catFacts.map(fact => (
          <li key={fact.id}>{fact.text}</li>
        ))}
      </ul>

    </div>
  );
};

export default CatFacts;
