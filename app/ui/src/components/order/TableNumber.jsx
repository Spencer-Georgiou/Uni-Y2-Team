'use client';
import { Button } from 'flowbite-react';
import React, { useState } from 'react';

{/*Pop up that allows users to enter their table number.*/}
function TableNumber() {

    const [tableNumber, setTableNumber] = useState('');

    {/*Change table number to user input*/}
    const handleTableNumber = (e) => {
        setTableNumber(e.target.value);
    }

    return (
        <div class="w-full h-screen bg-fixed bg-center bg-cover flex justify-center items-center relative" style={{ backgroundImage: "url('/images/TableNumberBanner.png')" }}>
            <form className="h-[300px] w-[500px] rounded-[25px] py-5 m-auto bg-cherry px-6">
            {/*Input field that allows users to input their table number*/}
            <div className="text-2xl text-lemon font-sans font-semibold text-center mb-4">
                Order
            </div>
            <div className="text-2xl text-lemon font-sans font-semibold text-center mb-4">
                Please Enter Your Table Number
            </div>
            <div className="mb-5 ">
                <b><input type="text" id="tableNumber" value={tableNumber} onChange={handleTableNumber} name="tableNumber" className="text-xl text-black font-semibold text-center h-14 bg-lemon border border-lemon rounded-2xl block w-full p-2.5 focus:ring-4 focus:ring-amber" placeholder="Table Number" required /></b>
            </div>
            <div className="flex justify-center">
                <Button type="submit" className="h-16 font-sans font-semibold bg-lemon rounded-lg text-xl w-40 rounded-2xl px-5 py-2.5 text-center text-cherry hover:ring-4 hover:ring-amber focus:ring-amber">Enter</Button>
            </div>
            </form>
        </div>
    );
}


export default TableNumber