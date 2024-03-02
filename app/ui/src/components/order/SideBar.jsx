import { Fragment } from "react";

const SideBar = ({ order }) => {
  return (
    <div class="w-1/3 bg-amber h-screen">
      <div class="mt-24 bg-lemon w-10/12 h-[550px] ml-8 rounded-3xl p-6">
        {order.length > 0 ? (
          order.map((o, index) => (
            <Fragment key={index}>
              <p class="text-lg">{o.name}</p>

              <p>
                <b class="mr-[20px]">{o.price} </b> <b>+ {o.amount} -</b>
              </p>
            </Fragment>
          ))
        ) : (
          <p>no order</p>
        )}
      </div>
      <button
        type="button"
        class="w-48 text-lemon bg-cherry rounded-full text-2xl px-5 py-2.5 text-cente mx-36 mt-5"
      >
        <b>Check Out</b>
      </button>
    </div>
  );
};

export default SideBar;
