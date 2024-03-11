'use client';

import React, {useState, useEffect} from "react"
import {Button, Modal } from 'flowbite-react';


{/*Buttons which waiter presses to filter menu*/}
const filterButtons = [
    {
        name: "All",
        value: "All"
    },
    {
        name: "Starter",
        value: "Starter"
    },
    {
        name: "Main",
        value: "Main"
    },
    {
        name: "Dessert",
        value: "Dessert"
    },
    {
        name: "Non-Alcoholic",
        value: "Non-Alcoholic"
    },
    {
        name: "Alcoholic",
        value: "Alcoholic"
    }
];

const MenuModify = () => {
    const [data, setData] = useState([])
    const [filteredMenu, setFilteredMenu] = useState(data)
    const [openModal, setOpenModal] =useState(false);
    const [allergens, setAllergens] = useState(data)

    const [foodName, setFoodName] = useState("")
    const [foodDescription, setFoodDescription] = useState("")
    const [foodCalories, setFoodCalories] = useState(0)



    // Fetches menu data from api and sets it in json format
    useEffect(() => {
        fetch('/api/menu')
          .then(response => response.json())
          .then(json => setData(json))

      }, [])


  

      // Filter menu item
        const filterMenu = (filterType) => { //The argument filterType is the filter waiter wants to display
            if (filterType === "All"){ //If waiter wants to display the entire menu, it will set the
                setFilteredMenu(data);// filtered menu state as just the entire data
                
            }
            else{ // Otherwise, it will filter the data (data.filter) checking if the filterType argument is the same as the item (from api data) category
                let filteredFood = data.filter(item => item.menugroup.category === filterType);
                setFilteredMenu(filteredFood)
            }
        }




        const getAllergens = (itemAllergens) => {

            setAllergens(itemAllergens)
        }

        const setVariables = (food) => {
            setFoodName(food.name)
            setFoodDescription(food.description)
            setFoodCalories(food.calorie)
        }






    
        
    
        




        return(

            <div className="Menu relative overflow-x-auto">
                {filterButtons.map((item, index) => (
                    <button className="bg-redder text-black text-3xl  font-sans font-bold py-5 px-5 my-2 mx-1 space-x-4 rounded-lg" 
                    key={index} value={item.name} onClick={()=> filterMenu(item.name)}>
                        
                        {item.name}
                    </button>
                ))}

                    <table border={1} className="w-full text-xl text-left rtl:text-right">
                        <thead>
                            <tr className="bg-amber text-3xl text-sans">

                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Calorie</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                

                                
                            </tr>
                        </thead>
                        <tbody>
                        {filteredMenu.map((item) => (
                            <tr key={item.id}
                            onClick={() => {setOpenModal(true); getAllergens(item.allergens); setVariables(item)}} 
                            className="text-sans text-2xl bg-lemon border-b dark:bg-gray-800 dark:border-gray-700">
                                <Modal 
                                size="4xl"
                                dismissible show={openModal} 
                                onClose={() => setOpenModal(false)}>


                                    
                                    <Modal.Header className="text-5xl text-black text-sans text-base">{foodName}</Modal.Header>
                                    <Modal.Body>

                                        <div className="space-y-6">
                                            <p className="text-xl text-black text-sans text-base">
                                                {foodDescription}
                                            </p>
                                            <p className="text-m text-black text-sans text-base">
                                                {foodCalories} calories
                                            </p>

                                            {allergens &&
                                            allergens.map(food => (
                                                <p key={food.id} className="text-m text-black text-sans text-base">
                                                Allergen: {food.name}
                                            </p>
                                            ))}
                                        </div>

                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button type="button" className="bg-lemon text-black font-sans font-bold py-2 px-4 my-2 rounded-lg">
                                            Add to order
                                        </button>                                    
                                    </Modal.Footer>
                            </Modal>
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">{item.calorie}</td>
                            <td className="px-6 py-4"> </td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            
        )
}
export default MenuModify



