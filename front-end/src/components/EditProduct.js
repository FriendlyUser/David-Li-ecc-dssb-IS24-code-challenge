// editProduct.js

import React, { useState, useEffect } from "react";
import { useSWRConfig } from "swr";
import { baseUrl } from "../utils"; 

/**
 * Renders a form for editing a product.
 *
 * @param {object} product - The product object to be edited.
 * @param {function} setShowModal - A function to control the visibility of the modal.
 * @return {JSX.Element} The rendered form for editing the product.
 */
function EditProduct({ product, setShowModal }) {


  const [developers, setDevelopers] = useState(product?.Developers || []);
  const [newDeveloper, setNewDeveloper] = useState("");

  useEffect(() => {
    if (product) {
      setDevelopers(product?.Developers || []);
      // set selected value for project.methodology
      
    }
  }, [product])
  const { mutate } = useSWRConfig();

  const removeDeveloper = (index) => {
    const newDevelopers = [...developers];
    newDevelopers.splice(index, 1);
    setDevelopers(newDevelopers);
  }

  const addDeveloper = () => {
    const newDevelopers = [...developers, newDeveloper];
    // make sure list does not exceed 5
    if (newDevelopers.length > 5) {
        newDevelopers.pop();
    }
    setDevelopers([...developers, newDeveloper]);
    setNewDeveloper('');
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const updatedProduct = Object.fromEntries(formData);

    if(developers.length > 0) {
      updatedProduct.Developers = developers; 
    }

    try {
      const res = await fetch(`${baseUrl}/api/products/${product.productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)  
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setShowModal(false);
    mutate("/api/products");

    // clear search query if form is submitted
    const url = window.location.href;
    if(url.includes('?')) {
        window.location.href = url.split('?')[0];
    }
  };

  // reuse developer handlers from AddProduct

  if (!product) {
    return null;
  }
  // format project start date to be 2023-03-01
  const formattedStartDate = new Date(product.startDate);
  // change formattedStartDate to YYYY-MM-DD as a string?
  const formattedStartDateString = formattedStartDate.toISOString().split('T')[0];
  return (
    <>
      <h2 className="text-lg font-bold">Edit Product {product.productId} </h2>
      <form onSubmit={onSubmit} name="form">
          <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
              Product Name
              </label>
              <input 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="productName"
                  name="productName"
                  type="text"
                  required
                  defaultValue={product.productName}
              />
          </div>

          <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productOwnerName">
              Product Owner
              </label>
              <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productOwnerName"
              name="productOwnerName"
              type="text" 
              required
              defaultValue={product.productOwnerName}
              />
          </div>

          <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productOwner">
              Developers
              </label>
              {/** If I get more time, change code to randomize colours of users */}
              <div className="flex flex-wrap mb-3">
                  {
                      developers.map((developer, index) => {
                          return (
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mt-3 text-ellipsis overflow-hidden whitespace-nowrap" key={`${developer}-${index}`}>{developer}
                              <div role="button" onClick={() => {
                                  removeDeveloper(index);
                              }} className="inline-flex items-center p-1 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" aria-label="Remove">
                                  <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                  </svg>
                                  <span className="sr-only">Remove badge</span>
                              </div>
                              </span>
                          );
                      })
                  }
              </div>
              {
                  developers.length < 5 && (
                      <>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Developers" type="text" 
                          value={newDeveloper}
                          onChange={(event)=> {
                              setNewDeveloper(event.target.value);
                          }} />
                          <button type="button" className="mt-3 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-auto" onClick={addDeveloper}>Add Developer</button>
                      </>
                  )
              }
          
          </div>
          <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scrumMasterName">
              Scrum Master
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="scrumMasterName"
                name="scrumMasterName"
                type="text" 
                required
                defaultValue={product.scrumMasterName}
              />
          </div>
          <div className="mt-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="startDate">
              Date Picker
              </label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="startDate"
                  disabled={true}
                  name="startDate"
                  type="date" 
                  readOnly
                  defaultValue={formattedStartDateString}
              />
          </div>
          <div className="mt-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="methodology">
              Methodology
              </label>
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="methodology" name="methodology"
                  defaultValue={product.methodology}
                  >
                      <option name="agile">Agile</option>
                      <option name="waterfall">Waterfall</option>
                  </select>
          </div>
          <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                name="location"
                type="text" 
                required
                defaultValue={product.location}
              />
          </div>
          <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit Changes</button>
      </form>
    </>
  );
}

export default EditProduct;