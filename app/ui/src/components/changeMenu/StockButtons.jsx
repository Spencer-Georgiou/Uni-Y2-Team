import { useState } from "react";

const StockButtons = ({ itemId, available, toggleAvailability }) => {
    const [isAvailable, setIsAvailable] = useState(available);

    const handleClick = () => {
        const newAvailability = !isAvailable;
        setIsAvailable(newAvailability);
        toggleAvailability(itemId, newAvailability);
    };

    return (
        <td className="px-6 py-4">
            <button
                type="button"
                className="font-sans font-bold py-2 px-4 my-2 rounded-lg"
                style={{ backgroundColor: isAvailable ? "green" : "transparent" }}
                onClick={handleClick}
                disabled={isAvailable}
            >
                Available
            </button>
            <button
                type="button"
                className="font-sans font-bold py-2 px-4 my-2 rounded-lg"
                style={{ backgroundColor: isAvailable ? "transparent" : "red" }}
                onClick={handleClick}
                disabled={!isAvailable}
            >
                Unavailable
            </button>
        </td>
    );
};

export default StockButtons;






