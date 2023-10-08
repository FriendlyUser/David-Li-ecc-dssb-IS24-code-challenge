import React from 'react';
import useSWR from 'swr';
import {fetcher} from './utils';
import DataTable from './Table';
import AddProduct from './AddProduct';
import './App.css';
// 
function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const productsApi = searchTerm ? `/api/products?q=${searchTerm}` : `/api/products`;
  const { data, error, isLoading } = useSWR(productsApi, fetcher);
  return (
    <div className="text-center py-12 px-6 lg:px-8 md:py-16 lg:py-16 overflow-x-auto">
      <div className="flex justify-between">
        {/** Search Bar */}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48"
          id="search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AddProduct />
      </div>
      <div className="mt-4 text-right">
        {data && (
          <p className="text-gray-500">
            Total Results: {data.length}
          </p>
        )}
      </div>
      <div className="overflow-y-auto">
        <DataTable data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
