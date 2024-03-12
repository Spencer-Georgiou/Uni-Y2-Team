"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

{/*Timeline that shows the live progress of a customer's order*/}
function OrderProgress() {
  return (
    <Timeline
      horizontal
      className="h-[180px] w-full bg-amber justify-center pl-5"
    >
      {/*Item in timeline, highlights when item is completed*/}
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
            Waiting For Confirmation
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
            Preparing
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
            Delivering
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded text-center text-cherry">
            Enjoy!
          </Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export default OrderProgress;
