"use client";

import { Button, Timeline } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

{
  /*Timeline that shows the live progress of a customer's order*/
}
function OrderProgress({ confirm, setconfirm }) {
  //there state is to control the display of different order status
  const [prepare, setPrepare] = useState(false);
  const [delivering, setDelivering] = useState(false);
  const [delivered, setDelivered] = useState(false);
  //store the order information
  const [order, setOrder] = useState({});
  //the current table number
  const tableNumber = useSelector((state) => state.table);

  //this function is to update the order progress
  function handleProgress() {
    //to get the latest order status
    fetchTable(tableNumber);
    const currentState = order.status;
    console.log(currentState);
    if (currentState === "Confirming") {
      setconfirm(true);
      setDelivering(false);
      setDelivered(false);
      setPrepare(false);
    }
    if (currentState === "Preparing") {
      setconfirm(false);
      setPrepare(true);
      setDelivered(false);
      setDelivering(false);
    }
    if (currentState === "Delivering") {
      setPrepare(false);
      setDelivering(true);
      setDelivered(false);
      setconfirm(false);
    }
    if (currentState === "Delivered") {
      setconfirm(false);
      setPrepare(false);
      setDelivering(false);
      setDelivered(true);
    }
  }

  //using table number to fetch order id from the database
  async function fetchTable(tableNumber) {
    return fetch(`/api/table?number=${tableNumber}`)
      .then((response) => {
        //if the request failed, throw error
        if (!response.ok) {
          throw new Error(`Failed to fetch table ${tableNumber}`);
        }
        return response.json();
      })
      .then((table) => {
        fetchOrder(table.order.id); // Fetch specfic order for the fetched table
        return table;
      })
      .catch((error) => {
        console.error(`Error fetching order ${tableNumber}:`, error);
        return null;
      });
  }

  //get the specfic order details by order id
  async function fetchOrder(tableId) {
    return fetch(`/api/order?id=${tableId}`)
      .then((response) => response.json())
      .then((json) => {
        //once sucessfully find the order, set it to order state
        setOrder(json);
      });
  }

  // the component of displaying highlight 'you are here' on order progress bar
  const Here = () => {
    return (
      <div>
        <span>
          {/* the bell icon */}
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 19 20"
            class="animate-bounce text-ocean w-7 h-7 ml-12 mt-2"
          >
            <path d="M18.012 13.453c-.219-1.173-2.163-1.416-2.6-3.76l-.041-.217c0 .006 0-.005-.007-.038v.021l-.017-.09-.005-.025v-.006l-.265-1.418a5.406 5.406 0 0 0-5.051-4.408.973.973 0 0 0 0-.108L9.6 1.082a1 1 0 0 0-1.967.367l.434 2.325a.863.863 0 0 0 .039.1A5.409 5.409 0 0 0 4.992 9.81l.266 1.418c0-.012 0 0 .007.037v-.007l.006.032.009.046v-.01l.007.038.04.215c.439 2.345-1.286 3.275-1.067 4.447.11.586.22 1.173.749 1.074l12.7-2.377c.523-.098.413-.684.303-1.27ZM1.917 9.191h-.074a1 1 0 0 1-.924-1.07 9.446 9.446 0 0 1 2.426-5.648 1 1 0 1 1 1.482 1.343 7.466 7.466 0 0 0-1.914 4.449 1 1 0 0 1-.996.926Zm5.339 8.545A3.438 3.438 0 0 0 10 19.1a3.478 3.478 0 0 0 3.334-2.5l-6.078 1.136Z" />
          </svg>
        </span>
        <p className="text-ocean mt-1">You Are Here</p>
        {/* the button to update the ordre progress status */}
        <button
          type="button"
          class="underline text-base text-gray-800 hover:text-cherry"
          onClick={handleProgress}
        >
          refresh
        </button>
      </div>
    );
  };

  return (
    <div>
      <Timeline
        horizontal
        className="h-[180px] w-full bg-amber justify-center pl-5"
        onClick={handleProgress}
      >
        {/*Item in timeline, highlights when item is completed*/}
        <Timeline.Item>
          <Timeline.Content>
            <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
              Waiting For Confirmation
              {confirm && <Here />}
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
              Preparing
              {prepare && <Here />}
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
              Delivering
              {delivering && <Here />}
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
              Enjoy!
              {delivered && <Here />}
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default OrderProgress;
