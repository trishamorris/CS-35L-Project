'use client';

import { useState } from 'react';

function BookSearch() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  async function handleSearch(event) {
    event.preventDefault();
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

export default BookSearch;
