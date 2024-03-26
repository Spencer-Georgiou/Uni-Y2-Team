'use client';
import { Button } from 'flowbite-react';

/* This button is a cancelling order button but only
displays when the order's status is past confirming so that
the waiter is not able to cancel the order after it has been confirmed*/

function NoCancellingAllowedButton() {
    return <Button disabled>Cancel Order</Button>;
}

export default NoCancellingAllowedButton;
