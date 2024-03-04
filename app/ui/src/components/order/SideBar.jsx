import { Fragment } from "react";

const SideBar = ({ order }) => {
  return (
    <div class="w-1/3 bg-amber h-screen">
      <div class="mt-20 bg-lemon w-10/12 h-[600px] ml-8 rounded-3xl p-6">
        {order.length > 0 ? (
          order.map((o, index) => (
            <Fragment key={index}>
              <p class="text-lg mt-2">
                <b>{o.name}</b>
              </p>
              <p>{o.description}</p>
              <span>
                Price: <b>￡{o.price} </b>
                <div className="float-right mx-2">
                  <button
                    type="button"
                    className=" border text-gray-800 border-gray-800 bg-amber hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-1.5 py-1.5 text-center inline-flex items-center m-1 hover:text-dark hover:bg-amber"
                  >
                    <svg
                      class="w-3 h-3 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                      />
                    </svg>
                  </button>
                  <b className="text-lg">{o.amount}</b>
                  <button
                    type="button"
                    className="border text-gray-800 border-gray-800 bg-amber hover:bg-cherry focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-1.5 py-1.5 text-center inline-flex items-center m-1 hover:text-white hover:bg-amber"
                  >
                    <svg
                      class="w-3 h-3 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                      />
                    </svg>
                  </button>
                </div>
              </span>
            </Fragment>
          ))
        ) : (
          <p>no order</p>
        )}
      </div>
      <button
        type="button"
        class="w-48 text-lemon bg-cherry rounded-full text-2xl px-5 py-2.5 text-cente mx-36 mt-5 hover:bg-lemon hover:text-amber"
      >
        <b>Check Out</b>
      </button>
    </div>
  );
};

export default SideBar;
