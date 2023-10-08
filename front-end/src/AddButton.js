// add button component
import React, {useState} from "react";
import Modal from "./Modal";

"productId": 38, "productName": "Modern Rubber Hat", "productOwnerName": "Maggie Renner", "Developers": [ "Jane Doe", "Jill Smith", "Jane Black" ], "scrumMasterName": "Lula Lynch", "startDate": "2023/9/2", "methodology": "Agile", "location": "https://github.com/bcgov/productToni.Hackett"
function AddProduct () {
    const [showModal, setShowModal] = useState(false);
    const [developers, setDevelopers] = useState(['']);
    const onAdd = () => {
        // show modal
    }

    const addDeveloper = () => {
        setDevelopers([...developers, '']);
      }
      
    const updateDeveloper = (index, value) => {
        const newDevelopers = [...developers];
        newDevelopers[index] = value;
        setDevelopers(newDevelopers);
    }
    return (
        <>
        <button onClick={() => {
            setShowModal(true);
        }}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> Add</button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <div className="modal-content">
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
                        {developers.map((dev, index) => (
                            <input 
                                key={`dev-${index}`}
                                value={dev}
                                onChange={e => updateDeveloper(index, e.target.value)}
                            />
                        ))}
                        <button onClick={addDeveloper}>Add Developer</button>
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
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="startDate"
                            type="date" 
                        />
                    </div>
                </form>
            <button onClick={() => setShowModal(false)}>Close</button>
            </div>
        </Modal>
      </>
    );
}

export default AddProduct;