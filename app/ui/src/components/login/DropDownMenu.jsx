'use client';

import { Dropdown } from 'flowbite-react';

/**Drop down list that takes users to the food menu and drink menu pages.
 * 
 */
function DropDownMenu() {
    return (
        <Dropdown className="text-cherry" label="Menu" inline>
            <Dropdown.Item href="#">Food Menu</Dropdown.Item>
            <Dropdown.Item href="#">Drink Menu</Dropdown.Item>
        </Dropdown>
    );
}


export default DropDownMenu
