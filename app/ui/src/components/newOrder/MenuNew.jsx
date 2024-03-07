'use client';

import React, { useState, useEffect } from "react"
// import {  Modal } from 'flowbite-react';
import ModalNew from "../../components/newOrder/ModalNew";


// Buttons which waiter presses to filter menu
const filterButtons = [
    { name: "All", value: "All" },
    { name: "Starter", value: "Starter" },
    { name: "Main", value: "Main" },
    { name: "Dessert", value: "Dessert" },
    { name: "Non-Alcoholic", value: "Non-Alcoholic" },
    { name: "Alcoholic", value: "Alcoholic" }
];






const MenuModify = ({ orderNewItem }) => {
    const [data, setData] = useState([])
    const [filteredMenu, setFilteredMenu] = useState(data)
    const [selectedItemId, setSelectedItemId] = useState(null);


    // Quantity of food item the customer wants to order
    const [orderQuantity, setOrderQuantity] = useState({})





    // Fetches menu data from api and sets it in json format
    useEffect(() => {
        fetch('/api/menu')
            .then(response => response.json())
            .then(json => setData(json))

    }, [])




    // Filter menu item
    const filterMenu = (filterType) => { //The argument filterType is the filter waiter wants to display
        if (filterType === "All") { //If waiter wants to display the entire menu, it will set the
            setFilteredMenu(data);// filtered menu state as just the entire data

        }
        else { // Otherwise, it will filter the data (data.filter) checking if the filterType argument is the same as the item (from api data) category
            let filteredFood = data.filter(item => item.menugroup.category === filterType);
            setFilteredMenu(filteredFood)
        }
    }




    const increaseQuantity = (quant) => {
        setOrderQuantity(prevState => ({ //prev state is the previous state iof ordeQuantity
            ...prevState, 
            [quant]: (prevState[quant] || 0) +1 //updating the quantity associated with the item identified by quant. 
            //If quant already exists in the previous state (prevState), we increment its value by 1. 
            //If quant doesn't exist (i.e., it's the first time we're adding this item), we default its value to 0 and then increment it by 1.
        }));
    }

    const decreaseQuantity = (quant) => {
        setOrderQuantity(prevState => ({
            ...prevState,
            [quant]: Math.max((prevState[quant] || 1) -1, 0)
        }));
    }

    const openModalForItem = (itemId) => {
        setSelectedItemId(itemId);
    };

    const closeModal = () => {
        setSelectedItemId(null);
        setOrderQuantity({})
    };




    const handleOrder = (item) => {
        let quantity = orderQuantity[item.id];
        {quantity > 0 ?
            (orderNewItem({
                name: item.name,
                calorie: item.calorie,
                price: item.price,
                quantity: quantity,
            }))
            : (quantity = 0)
        }
    }














    return (

        <div className="Menu relative overflow-x-auto">
            {filterButtons.map((item, index) => (
                <button className="bg-redder text-black text-3xl  font-sans font-bold py-5 px-5 my-2 mx-1 space-x-4 rounded-lg hover:bg-amber hover:text-lemon"
                    key={index} value={item.name} onClick={() => filterMenu(item.name)}>

                    {item.name}
                </button>
            ))}

            <table border={1} className="w-full text-xl text-left rtl:text-right">
                <thead>
                    <tr className="bg-amber text-3xl text-sans">

                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Price(£)</th>
                        <th scope="col" className="px-6 py-3">Calorie(cal)</th>
                        <th scope="col" className="px-6 py-3">  </th>



                    </tr>
                </thead>
                <tbody>
                    {/* Render each item */}
                    {filteredMenu.map((item) => (
                        <tr key={item.id} className="text-sans text-2xl bg-lemon border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">{item.calorie}</td>
                            <td className="px-6 py-4">
                                <button
                                    type="button"
                                    className="bg-cherry text-black font-sans font-bold py-2 px-4 my-2 rounded-lg hover:bg-amber hover:text-yellow-200"
                                    onClick={() => {openModalForItem(filteredMenu.indexOf(item));console.log(item)}}
                                >
                                    Add to order
                                </button>
                                {selectedItemId !== null && (
                                    <ModalNew
                                    item={filteredMenu[selectedItemId]}
                                    openModal={true}
                                    setOpenModal={closeModal}
                                    decreaseQuantity={decreaseQuantity}
                                    orderQuantity={orderQuantity}
                                    increaseQuantity={increaseQuantity}
                                    handleOrder={handleOrder}
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
export default MenuModify



