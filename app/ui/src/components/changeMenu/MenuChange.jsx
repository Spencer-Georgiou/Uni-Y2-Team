// MenuChange.js
import { useState, useEffect } from "react";
import StockButtons from "./StockButtons";

const filterButtons = [
    { name: "All", value: "All" },
    { name: "Starter", value: "Starter" },
    { name: "Main", value: "Main" },
    { name: "Dessert", value: "Dessert" },
    { name: "Soft Drink", value: "Soft Drink" },
    { name: "Beer", value: "Beer" },
    { name: "Cocktail", value: "Cocktail" },
    { name: "Hot Drink", value: "Hot Drink" },
];

const MenuChange = () => {
    const [data, setData] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);

    useEffect(() => {
        fetch('/api/menu')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setFilteredMenu(json);
            });
    }, []);

    const filterMenu = (filterType) => {
        if (filterType === "All") {
            setFilteredMenu(data);
        } else {
            const filteredFood = data.filter(item => item.menugroup.category === filterType);
            setFilteredMenu(filteredFood);
        }
    };

    const toggleAvailability = (itemId) => {
        const updatedMenu = filteredMenu.map(item => {
            if (item.id === itemId) {
                const updatedItem = { ...item, available: !item.available };
                // Send PATCH request to update availability in the database
                fetch(`/api/menuitem`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name:
                        'updatedItem.name',
                         available: updatedItem.available 
                        })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to update availability');
                    }
                    return response.json();
                })
                .then(() => updatedItem)
                .catch(error => {
                    console.error('Error updating availability:', error);
                    return item; // Revert to original item if PATCH request fails
                });
            }
            return item;
        });
        setFilteredMenu(updatedMenu);
    };

    return (
        <div>
            <div className="Menu relative overflow-x-auto" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                {filterButtons.map((item, index) => (
                    <button className="bg-redder text-black text-3xl font-sans font-bold py-5 px-5 my-2 rounded-lg hover:bg-amber hover:text-lemon"
                        key={index} value={item.name} onClick={() => filterMenu(item.value)}>
                        {item.name}
                    </button>
                ))}
            </div>
            <table border={1} className="w-full text-xl text-left rtl:text-right">
                <thead>
                    <tr className="bg-amber text-3xl text-sans">
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Price(£)</th>
                        <th scope="col" className="px-6 py-3">Calorie(cal)</th>
                        <th scope="col" className="px-6 py-3">Stock Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMenu.map((item) => (
                        <tr key={item.id} className="text-sans text-2xl bg-lemon border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">{item.calorie}</td>
                            <StockButtons itemId={item.id} available={item.available} toggleAvailability={toggleAvailability} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MenuChange;
