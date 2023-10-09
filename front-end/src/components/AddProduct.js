// add button component
import React, {useState} from "react";
import { useSWRConfig } from 'swr'
// import useSWR from 'swr'; invalidate cache
import {baseUrl} from "../utils";
import Modal from "./Modal";

/**
 * Renders a form for adding a new product and handles the submission of the form data.
 *
 * @param {Event} e - The form submit event.
 * @return {void} No return value.
 */
function AddProduct () {
    const [showModal, setShowModal] = useState(false);
    const [developers, setDevelopers] = useState([]);
    const [newDeveloper, setNewDeveloper] = useState('');
    const { mutate } = useSWRConfig()

    const onSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // add developers to form data
        const newProduct = Object.fromEntries(formData.entries()); 

        // up to 5 developers, can be zero
        if (developers.length > 0) {
            newProduct.Developers = developers;
        } else {
            newProduct.Developers = [];
        }
        // submit to product api
        // POST - api/products with fetch
        try {
            const response = await fetch(`${baseUrl}/api/products`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            const data = await response.json();
            console.log(data);
        } catch(err) {
            console.error(err);
        }
        // close modal
        setShowModal(false);

        mutate('/api/products');
        // clear search query if form is submitted
        const url = window.location.href;
        if(url.includes('?')) {
            window.location.href = url.split('?')[0];
        }
        return;

        
        // submit form
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

    const removeDeveloper = (index) => {
        const newDevelopers = [...developers];
        newDevelopers.splice(index, 1);
        setDevelopers(newDevelopers);
    }
    return (
        <>
        <div className="text-right">
            <button onClick={() => {
                setShowModal(true);
            }} className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><span className="flex justify-center items-center gap-x-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Add Product</span></button>
        </div>

        <Modal showModal={showModal} setShowModal={setShowModal}>
            <div className="modal-content p-4 rounded-md">
                <h2 className="text-lg font-bold">Add New Product</h2>
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
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                        Date Picker
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="startDate"
                            name="startDate"
                            type="date" 
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="methodology">
                        Methodology
                        </label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="methodology" name="methodology">
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
                        />
                    </div>
                    <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Create Product</button>
                </form>
            </div>
        </Modal>
      </>
    );
}

export default AddProduct;