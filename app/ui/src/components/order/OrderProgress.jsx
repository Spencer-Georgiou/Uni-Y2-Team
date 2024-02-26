'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

function OrderProgress() {
  return (
    <Timeline horizontal className="h-[180px] w-[700px] bg-amber justify-center">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded flex text-center self-center text-cherry">Waiting For Confirmation</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded flex text-center self-center text-cherry">Preparing</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded flex text-center self-center text-cherry">Delivering</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Title className="h-[150px] w-[150px] bg-lemon rounded flex text-center self-center text-cherry">Enjoy!</Timeline.Title>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

export default OrderProgress;