import { Fragment, useEffect, useState } from "react";

const OrderMain = ({ starter, handleOrder }) => {
  const starter1 = [
    {
      title: "Burrito",
      name: "Rice, beans and cheese wrapped up in a flour tortilla",
      kcal: "350 kcal",
      price: "￡6.00",
      value: "-----",
      id: 1,
    },
    {
      title: "Chorizo Quesadilla",
      name: "Chorizo and cheese toasted in a flour tortilla",
      kcal: "400 kcal",
      price: "$7.50",
      value: "vegetarian",
      id: 2,
    },
  ];

  const starter2 = [
    {
      title: "Bean Tostadas",
      name: "Chickpeas, beans and peas with tomato salsa",
      kcal: "300 kcal",
      price: "￡6.00",
      value: "vegan",
      id: 3,
    },
    {
      title: "Halloumi Skewers",
      name: "Roasted halloumi cheese and vegetables",
      kcal: "500 kcal",
      price: "￡5.50",
      value: "------",
      id: 4,
    },
  ];

  return (
    <div>
      <img src="/menu/mains.png" alt="starter" class="w-2/3 h-18 mx-48 my-2" />
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

export default OrderMain;
