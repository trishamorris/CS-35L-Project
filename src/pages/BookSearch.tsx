'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

function BookSearch() {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const url = `/api/ApiRequests?query=${encodeURIComponent(query)}`;

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
