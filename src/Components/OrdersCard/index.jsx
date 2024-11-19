function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center my-4 p-5 border border-black rounded-lg">
      <p>
        <span>01.21.2024</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}

export { OrdersCard };
