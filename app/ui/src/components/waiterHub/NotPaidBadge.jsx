"use client";
import { Badge } from "flowbite-react";

function NotPaidBadge() {
    return (
        <Badge className="bg-redder text-black animate-bounce" color="failure">NOT PAID</Badge>
    );
}

export default NotPaidBadge;
