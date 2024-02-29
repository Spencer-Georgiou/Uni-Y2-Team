import { Fragment, useEffect, useState } from "react";

const OrderDessert = ({ starter, handleOrder }) => {
  const starter1 = [
    {
      title: "Churros",
      name: "Fried churros with a chocolate filling",
      kcal: "500 kcal",
      price: "￡4.00",
      value: "Fruit",
      id: 1,
    },
    {
      title: "Sweet Fried Plantains",
      name: "Sugar coated fried plantains",
      kcal: "300 kcal",
      price: "$3.00",
      value: "Fried",
      id: 2,
    },
  ];

  const starter2 = [
    {
      title: "Ice Cream",
      name: "2 scoops of vanilla ice cream",
      kcal: "300 kcal",
      price: "￡2.50",
      value: "Dairy",
      id: 3,
    },
  ];

  return (
    <div>
      <img
        src="/menu/desserts.png"
        alt="starter"
        class="w-2/3 h-18 mx-48 my-2"
      />
      <div>
        <div class="w-1/2 float-left">
          {starter1.map((s) => (
            <Fragment key={s.id}>
              <div class="w-3/4 bg-amber h-[180px] ml-[80px] my-5 p-3 text-xl">
                <p class="text-lemon">
                  <b>{s.title}</b>
                </p>
                <p>• {s.name}</p>
                <p class="text-lg">{s.kcal}</p>
                <p class="pt-1">
                  <b>{s.price}</b>
                  <button
                    type="button"
                    class=" bg-lemon w-[40px] h-[40px] rounded-full text-2xl ml-[230px] text-center"
                  >
                    <b>+</b>
                  </button>
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <div class="w-1/2 float-right">
          {starter2.map((s) => (
            <Fragment key={s.id}>
              <div class="w-3/4 bg-amber h-[180px] ml-[20px] my-5 p-3 text-xl">
                <p class="text-lemon">
                  <b>{s.title}</b>
                </p>
                <p>• {s.name}</p>
                <p class="text-lg">{s.kcal}</p>
                <p class="pt-1">
                  <b>{s.price}</b>
                  <button
                    type="button"
                    class=" bg-lemon w-[40px] h-[40px] rounded-full text-2xl ml-[230px] text-center"
                  >
                    <b>+</b>
                  </button>
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDessert;
