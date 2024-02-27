const Starters = () => {
  const starter1 = [
    {
      title: "Tacos",
      name: "Crispy tacos filled with cheese",
      kcal: "600 kcal",
      price: "￡5.00",
      value: "spicy",
    },
    {
      title: "Patatas Bravas",
      name: "Roasted potatoes in tomato dressing (V)",
      kcal: "500 kcal",
      price: "$3.00",
      value: "vegetarian",
    },
  ];

  const starter2 = [
    {
      title: "Jalapeno Poppers",
      name: "With cream cheese",
      kcal: "450 kcal",
      price: "￡3.00",
      value: "spicy",
    },
    {
      title: "Crispy Cauliflower Bites",
      name: "Roasted cauliflower in jalapeno dressing (V)",
      kcal: "200 kcal",
      price: "￡2.50",
      value: "spicy",
    },
  ];

  return (
    <div>
      <img
        src="/menu/starters.png"
        alt="picture"
        class="w-2/3 h-18 mx-48 my-2"
      />
      <div>
        <div class="w-1/2 float-left">
          {starter1.map((s) => (
            <div class="w-3/4 bg-amber h-[180px] ml-[100px] my-5 p-3 text-xl">
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
          ))}
        </div>
        <div class="w-1/2 float-right">
          {starter2.map((s) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Starters;
