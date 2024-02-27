'use client';

import React, {useState, useEffect} from "react"

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

const Menu = () => {
    const [data, setData] = useState([])
    const [filteredMenu, setFilteredMenu] = useState(data)


    useEffect(() => {
        fetch('/api/menu')
          .then(response => response.json())
          .then(json => setData(json))

      }, [])


  

        const filterMenu = (filterType) => {
            if (filterType === "All"){
                console.log(filterType);
                setFilteredMenu(data);
                
            }
            else{
                console.log(data);
                let filteredFood = data.filter(item => item.menugroup.category === filterType);
                setFilteredMenu(filteredFood)
            }
        }


    
        
    
        




        return(

            <div className="Menu relative overflow-x-auto">
                {filterButtons &&
                filterButtons.map((item, index) => (
                    <button className="bg-redder text-black text-3xl  font-sans font-bold py-5 px-5 my-2 mx-1 space-x-4 rounded-lg" key={index} value={item.name} onClick={()=> filterMenu(item.name)}>
                        {item.name}
                    </button>
                ))}

                    <table border={1} className="w-full text-xl text-left rtl:text-right">
                        <thead>
                            <tr className="bg-amber text-3xl text-sans">

                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Calorie</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {filteredMenu &&
                        filteredMenu.map(item => (
                        <tr key={item.id} className="text-sans text-2xl bg-lemon border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">{item.calorie}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            
        )
}
export default Menu