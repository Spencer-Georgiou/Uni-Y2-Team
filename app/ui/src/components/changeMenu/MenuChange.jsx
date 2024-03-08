
import { useState, useEffect } from "react"

const filterButtons = [
    { name: "All", value: "All" },
    { name: "Starter", value: "Starter" },
    { name: "Main", value: "Main" },
    { name: "Dessert", value: "Dessert" },
    { name: "Soft Drink", value: "Soft Drink" },
    { name: "Beer", value: "Beer" },
    { name: "Cocktails", value: "Cocktails" },
    { name: "Hot Drink", value: "Hot Drink" },
];



const MenuChange = () => {

    const [data, setData] = useState([])
    const [filteredMenu, setFilteredMenu] = useState(data)

    const [clicked, setClicked] = useState("available");
    const [availableButton, setAvailableButton] = useState("green");
    const [unavailableButton, setUnvailableButton] = useState("lemon");



    useEffect(() => {
        fetch('/api/menu')
            .then(response => response.json())
            .then(json => setData(json))

    }, [])

    const filterMenu = (filterType) => { //The argument filterType is the filter waiter wants to display
        if (filterType === "All") { //If waiter wants to display the entire menu, it will set the
            setFilteredMenu(data);// filtered menu state as just the entire data

        }
        else { // Otherwise, it will filter the data (data.filter) checking if the filterType argument is the same as the item (from api data) category
            let filteredFood = data.filter(item => item.menugroup.category === filterType);
            setFilteredMenu(filteredFood)
        }
    }


    // const stockButtonColour = () => {
    //     if (stockButton === "red"){
    //         setStockButton("green");
    //         setStockText("Available")
    //     }
    //     else{
    //         setStockButton("red")
    //         setStockText("Unavailable")
    //     }
    //   };

    const checkButton = () => {
        if (clicked === "available"){
            setAvailableButton("green")
            setUnvailableButton("transparent")
        }
        else{
            setAvailableButton("transparent")
            setUnvailableButton("red")
        }
    }





    return(
        <div>
            <div className="Menu relative overflow-x-auto" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                {filterButtons.map((item, index) => (
                    <button className="bg-redder text-black text-3xl font-sans font-bold py-5 px-5 my-2 rounded-lg hover:bg-amber hover:text-lemon"
                        key={index} value={item.name} onClick={() => filterMenu(item.name)}>
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
                                    className="font-sans font-bold py-2 px-4 my-2 rounded-lg"
                                    style={{backgroundColor: availableButton}}
                                    onClick={() => {setClicked("available"); checkButton()}}
                                >
                                    Available
                                </button>
                                <button
                                    type="button"
                                    className="font-sans font-bold py-2 px-4 my-2 rounded-lg"
                                    style={{backgroundColor: unavailableButton}}
                                    onClick={() => {setClicked("unavailable"); checkButton()}}
                                >
                                    Unavailable
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    );

}
export default MenuChange