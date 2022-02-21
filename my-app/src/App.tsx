import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Table from './components/Table';
import { AppContext } from './AppContent';
import Search from './components/Search';

function App() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const keys = ['first_name', 'last_name', 'country', 'email'];
  const search = (data: any) =>
    data.filter((item: any) =>
      keys.some(key => item[key].toLowerCase().includes(query))
    );
  useEffect(() => {
    const fetchUsers = async () => {
      const api =
        'https://api.json-generator.com/templates/DcXA1muluyuT/data?status=200&delay=20';
      const token = 'an0r1tjmnclnyw1af4djh8dxyo8u6hlls0iraoi8';
      const res = axios({
        method: 'GET',
        url: api,
        responseType: 'json',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          setData(res.data);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };
    fetchUsers();
  }, []);
  if (loading) {
    return <Loading color="#2b6b52" />;
  }
  if (error) return <div>{error}</div>;
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          setQuery,
        }}
      >
        <Search />
      </AppContext.Provider>
      <Table userData={search(data)} />
    </div>
  );
}

export default App;
