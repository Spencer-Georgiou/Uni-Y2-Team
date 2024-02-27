'use client';

import React, {useState, useEffect} from "react"

const Menu = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        fetch('/api/menu')
          .then(response => response.json())
          .then(json => setData(json))

      }, [])
    
    
        
    
        




        return(
            <div className="Menu relative overflow-x-auto">
                    <table border={1} className="w-full text-xl text-left rtl:text-right text-black text-sans">
                        <thead clasName="text-black bg-cherry uppercase rounded-lg">
                            <tr className="bg-cherry rounded-lg">

                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Calorie</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(item => (
                        <tr key={item.id} className="bg-lemon border-b dark:bg-gray-800 dark:border-gray-700">
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