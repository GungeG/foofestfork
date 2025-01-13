const CartLG = ({ ticketData }) => {
  const vipPrice = 1299;
  const regularPrice = 799;
  const campingPrice = 99;

  const vipSubtotal = ticketData.vip * vipPrice;
  const regularSubtotal = ticketData.regular * regularPrice;
  const campingSubtotal = ticketData.area ? campingPrice : 0;
  const subtotal = vipSubtotal + regularSubtotal + campingSubtotal;

  return (
    <div className="lg:w-[250px] lg:min-h-[300px] bg-[#242424] p-4 rounded-3xl shadow-lg fixed right-5 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="ml-2">
        <h1 className="text-center text-3xl font-GermaniaOneRegular">Cart</h1>
        <h2 className="font-bold text-xl font-GermaniaOneRegular">Tickets</h2>
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
        <h2 className="font-bold text-xl font-GermaniaOneRegular">Camping</h2>
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
    </div>
  );
};

export default CartLG;
