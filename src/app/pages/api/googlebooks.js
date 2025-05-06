'use client';

import { useState } from 'react';

function bookSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = 'AIzaSyDN16AFs3Tm2z7ZfWqYxsR6_eJ5Yd2o0sg';

  async function handleSearch(e) {
    function handleSubmit(event) { // this is to stop the search button from reloading the page
        event.preventDefault();
      }
    setLoading(true); // boolean state variable to mark search as in progress/complete

    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

// just shows stuff in console (no front end yet)
      console.log('Search result:', data);
    } catch (err) {
      console.log('Error fetching data:', err);
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Google Books Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter book title"
        />
        <button type="submit">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
    </div>
  );
}

export default bookSearch;
