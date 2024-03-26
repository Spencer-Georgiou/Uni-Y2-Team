'use client';
import { Button } from 'flowbite-react';

/* This button is to modify an order, but only
displays when the order's status is confirming or preparing so that
the waiter is not able to modify the order after it has been prepared*/
function NoModifyingAllowedButton() {
    return <Button disabled>Update Order</Button>;
}

export default NoModifyingAllowedButton