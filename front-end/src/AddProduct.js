// add button component
import React, {useState} from "react";
import Modal from "./Modal";

function AddProduct () {
    const [showModal, setShowModal] = useState(false);
    const [developers, setDevelopers] = useState([]);
    const [newDeveloper, setNewDeveloper] = useState('');
    const onAdd = () => {
        // show modal
    }

    const addDeveloper = () => {
        setDevelopers([...developers, newDeveloper]);
        setNewDeveloper('');
    }

    console.log(developers);
      
    const updateDeveloper = (index, value) => {
        const newDevelopers = [...developers];
        newDevelopers[index] = value;
        setDevelopers(newDevelopers);
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
            }} class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><span class="flex justify-center items-center gap-x-2"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Add Product</span></button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <div className="modal-content p-4 rounded-md">
                <div class="flex justify-end">
                    <button type="button" onClick={() => {
                        setShowModal(false);
                    }} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-lg font-bold">Add New Product</h2>
                <form>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                        Product Name
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productName" 
                        type="text"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productOwner">
                        Product Owner
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productOwner"
                        type="text" 
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productOwner">
                        Developers
                        </label>
                        {/** If I get more time, change code to randomize colours of users */}
                        <div class="flex flex-wrap mb-3">
                            {
                                developers.map((developer, index) => {
                                    return (
                                        <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-1.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mt-3 text-ellipsis overflow-hidden whitespace-nowrap" key={`${developer}-${index}`}>{developer}
                                        <div role="button" onClick={() => {
                                            removeDeveloper(index);
                                        }} class="inline-flex items-center p-1 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300" aria-label="Remove">
                                            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span class="sr-only">Remove badge</span>
                                        </div>
                                        </span>
                                    );
                                })
                            }
                        </div>
                        {/** Just have a input that is text, and show badges below */}
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Developers" type="text" 
                        value={newDeveloper}
                        onChange={(event)=> {
                            setNewDeveloper(event.target.value);
                        }} />
                        <button type="button" class="mt-3 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-auto" onClick={addDeveloper}>Add Developer</button>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="scrumMaster">
                        Scrum Master
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="scrumMaster"
                        type="text" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                        Date Picker
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="startDate"
                            type="date" 
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
                        type="text" 
                        />
                    </div>
                </form>
            </div>
        </Modal>
      </>
    );
}

export default AddProduct;