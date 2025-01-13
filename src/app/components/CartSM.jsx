const CartSM = ({ ticketData }) => {
  const vipPrice = 1299;
  const regularPrice = 799;
  const campingPrice = 99;

  const vipSubtotal = ticketData.vip * vipPrice;
  const regularSubtotal = ticketData.regular * regularPrice;
  const campingSubtotal = ticketData.area ? campingPrice : 0;
  const subtotal = vipSubtotal + regularSubtotal + campingSubtotal;

  return (
    <>
      <button
        className="btn hover:bg-[#242424] lg:hidden fixed right-5 top-12 z-20 transform bg-[#242424] -translate-y-1/2"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Cart
      </button>
      <dialog id="my_modal_1" className="modal lg:hidden">
        <div className="modal-box bg-[#242424] p-4 rounded-lg shadow-lg">
          <div className="ml-2">
            <h1 className="text-center text-3xl font-GermaniaOneRegular">
              Cart
            </h1>
            <h2 className="font-bold text-xl font-GermaniaOneRegular">
              Tickets
            </h2>
            <div className="mt-2 font-Gambetta flex justify-between">
              <div>
                <p>VIP Tickets:</p>
                <p className="text-sm font-thin">{vipPrice} DKK</p>
              </div>
              <p className="justify-end mt-3">X {ticketData.vip}</p>
            </div>
            <div className="mt-2 font-Gambetta flex justify-between">
              <div>
                <p>Regular Tickets:</p>
                <p className="text-sm font-thin">{regularPrice} DKK</p>
              </div>
              <p className="justify-end mt-3">X {ticketData.regular}</p>
            </div>
            <hr className="my-4" />
            <h2 className="font-bold text-xl font-GermaniaOneRegular">
              Camping
            </h2>
            <p className="font-Gambetta">{ticketData.area || "No area selected"}</p>
            {ticketData.area && (
              <p className="font-Gambetta">{campingPrice} DKK</p>
            )}
            <hr className="my-4" />
            <div className="flex justify-between font-Gambetta">
              <p className="text-lg">Subtotal:</p>
              <p className="justify-end text-lg">{subtotal} DKK</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartSM;