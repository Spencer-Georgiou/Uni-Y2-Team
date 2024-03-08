'use client';

import MenuChange from "../../components/changeMenu/MenuChange"

const ChangeMenu = () => {
    return(
        <div className="w-screen h-screen bg-redder flex items-center justify-center">
            <div className="h-5/6 w-5/6 bg-lemon p-4 space-x-4">
                <MenuChange />

            </div>
        </div>
    );
}
export default ChangeMenu