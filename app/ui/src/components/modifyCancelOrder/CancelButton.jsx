'use client'

{/*Button which allows waiters to cancel an order.*/ }
function CancelButton() {
  return (

    <button type="button" className="bg-cherry text-black font-sans font-bold py-2 px-4 my-2 rounded-lg hover:bg-yellow-200 hover:text-cherry">
      Cancel Order
    </button>

  );
}

export default CancelButton