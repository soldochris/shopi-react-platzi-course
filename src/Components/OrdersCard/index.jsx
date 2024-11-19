function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center my-4 p-5 border border-black rounded-lg">
      <p>
        <span className="font-light">01.21.2024 </span>
        <span>{totalProducts} </span>
        <span className="font-bold text-xl">${totalPrice}</span>
      </p>
    </div>
  );
}

export { OrdersCard };
