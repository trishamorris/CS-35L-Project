'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

function BookSearch() {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log('Search result:', data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }

    setLoading(false);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>book search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
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
