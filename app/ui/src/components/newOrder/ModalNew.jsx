'use client';
import React from 'react';
import {  Modal } from 'flowbite-react';

const ModalNew = ({ item, openModal, setOpenModal, decreaseQuantity, orderQuantity, increaseQuantity, handleOrder }) => {
    const { id, name, description, calorie, allergens, price } = item;



    return (
        <Modal
            size="4xl"
            show={openModal}
            onClose={() => setOpenModal(false)}
        >
            <Modal.Header className="text-5xl text-black text-sans text-base">{name}</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-xl text-black text-sans text-base">{description}</p>
                    <p className="text-m text-black text-sans text-base">{calorie} calories</p>
                    {allergens && allergens.map(food => (
                        <p key={food.id} className="text-m text-black text-sans text-base">
                            Allergen: {food.name}
                        </p>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    type="button"
                    className="bg-lemon text-black text-3xl font-sans font-bold py-2 px-4 my-2 rounded-full hover:bg-amber hover:text-lemon"
                    onClick={() => decreaseQuantity(id)}
                >
                    --
                </button>
                <p className="text-xl text-bold text-black text-sans text-base">
                    {orderQuantity[id] || 0}
                </p>
                <button
                    type="button"
                    className="bg-lemon text-black text-3xl font-sans font-bold py-2 px-4 my-2 rounded-full hover:bg-amber hover:text-lemon"
                    onClick={() => increaseQuantity(id)}
                >
                    +
                </button>
                <button
                    type="button"
                    className="bg-cherry text-black font-sans font-bold py-2 px-4 my-2 rounded-lg hover:bg-amber hover:text-yellow-200 text-2xl"
                    onClick={() => { setOpenModal(false); handleOrder(item) }}
                >
                    Add £{orderQuantity[id] * price || 0}
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalNew;
