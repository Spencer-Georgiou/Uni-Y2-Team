import { useState, useEffect } from "react";
import StockButtons from "./StockButtons";



const MenuChange = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/menu')
            .then(response => response.json())
            .then(json => {
                setData(json);
            });
    }, []);



    const toggleAvailability = (itemId, newAvailability) => {
        const updatedMenu = data.map(item => {
            if (item.name === itemId) {
                const updatedItem = { ...item, available: newAvailability };
                fetch(`/api/menuitem`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: updatedItem.name,
                        available: newAvailability
                    })
                }) 
                return updatedItem;
            }
            return item;
        });
        setData(updatedMenu);
    };

    return (
        <div className="h-5/6 w-5/6 bg-lemon p-4 space-x-4">
            <div style={{ maxHeight: '100%', overflow: 'auto' , maxWidth: '100%'}}>

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
                        {data.map((item) => (
                            <tr key={item.id} className="text-sans text-2xl bg-lemon border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">{item.price}</td>
                                <td className="px-6 py-4">{item.calorie}</td>
                                <StockButtons itemId={item.name} available={item.available} toggleAvailability={toggleAvailability} />
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
        </div>
    );
}

export default MenuChange;




