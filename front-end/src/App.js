import logo from './logo.svg';
import useSWR from 'swr';
import {fetcher} from './utils';
import DataTable from './Table';
import './App.css';
// 
function App() {
  const { data, error, isLoading } = useSWR('/api/products', fetcher);
  return (
    <div className="App">
      <DataTable data={data} />
    </div>
  );
}

export default App;
