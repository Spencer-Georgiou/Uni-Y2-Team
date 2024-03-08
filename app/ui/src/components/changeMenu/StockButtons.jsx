'use client';

import { useState } from "react"




const StockButtons = ({ defaultAvailability }) => {
    const [clicked, setClicked] = useState(defaultAvailability);

    const [availableButton, setAvailableButton] = useState("green");
    const [unavailableButton, setUnavailableButton] = useState("transparent");





    const checkButton = () => {
        if (clicked === "available") {
            setAvailableButton("green");
            setUnavailableButton("transparent");
        } else {
            setAvailableButton("transparent");
            setUnavailableButton("red");
        }
    };





    return(
        <td className="px-6 py-4">

            
            <button
                type="button"
                className="font-sans font-bold py-2 px-4 my-2 rounded-lg"
                style={{ backgroundColor: availableButton }}
                onClick={() => { setClicked("available"); checkButton(); }}
            >
                Available
            </button>





            <button
                type="button"
                className="font-sans font-bold py-2 px-4 my-2 rounded-lg"
                style={{ backgroundColor: unavailableButton }}
                onClick={() => { setClicked("unavailable"); checkButton(); }}
            >
                Unavailable
            </button>
        </td>
    )

}
export default StockButtons