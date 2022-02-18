import { useState } from 'react';

import './App.css';
import { Users } from './users';
import Table from '../src/components/Table';
function App() {
  const [query, setQuery] = useState('');
  const search = (data: any) =>
    data.filter((item: any) => item.first_name.toLowerCase().includes(query));
  return (
    <div className="App">
      <input
        type="text"
        placeholder="...Search"
        className="search"
        onChange={e => setQuery(e.target.value)}
      />
      {/* <Table data={search(Users)} /> */}
    </div>
  );
}

export default App;
