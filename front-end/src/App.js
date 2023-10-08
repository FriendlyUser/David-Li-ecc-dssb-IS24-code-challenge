import React from 'react';
import useSWR from 'swr';
import {fetcher} from './utils';
import DataTable from './Table';
import AddProduct from './AddProduct';
import './App.css';
// 
function App() {
  const { data, error, isLoading } = useSWR('/api/products', fetcher);
  return (
    <div className="text-center py-12 px-6 lg:px-8 md:py-16 lg:py-16 overflow-x-auto">
      <div>
      <AddProduct />
      </div>
      <DataTable data={data} />
    </div>
  );
}

export default App;
