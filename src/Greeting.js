import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/greetings/random')
      .then((response) => {
        setGreeting(response.data.greeting);
      })
      .catch((error) => {
        console.error('Error fetching greeting:', error);
      });
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
