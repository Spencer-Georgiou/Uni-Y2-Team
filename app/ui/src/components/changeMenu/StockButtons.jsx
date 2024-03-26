// This file contains the toggle buttons the waiter has to click on.
import { useState } from "react";

const StockButtons = ({ itemId, available, toggleAvailability }) => {
    const [isAvailable, setIsAvailable] = useState(available);

    const handleClick = () => {
        // When the button is persistReducer, it changes the availability of that item
        // to the opoosite of its current availability, and requests the api to change it also.
        const newAvailability = !isAvailable;
        setIsAvailable(newAvailability);
        toggleAvailability(itemId, newAvailability);
    };

    return (
        <td className="px-6 py-4">
            <label className="inline-flex items-center me-5 cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isAvailable}
                    onChange={handleClick}
                />
                <div
                    className={`relative w-14 h-7 rounded-full peer ${
                        isAvailable ? "bg-green-600" : "bg-red-600"
                    } peer-focus:ring-0 dark:peer-focus:ring-0`}
                >
                    <div
                        className={`after:content-[''] after:absolute after:top-1 ${
                            isAvailable ? "after:end-6" : "after:start-2"
                        } after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            isAvailable ? "after:border-white" : "dark:border-gray-600"
                        } ${
                            isAvailable ? "after:translate-x-full rtl:after:-translate-x-full" : ""
                        }`}
                    ></div>
                </div>
                <span className="ms-3 text-sans text-2xl text-gray-900 dark:text-gray-300">
                    {isAvailable ? "Available" : "Unavailable"}
                </span>
            </label>
        </td>
    );
};

export default StockButtons;
