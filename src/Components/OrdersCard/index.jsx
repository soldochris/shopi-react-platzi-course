import { ShoppingBagIcon, ChevronRightIcon, CalendarDaysIcon } from "@heroicons/react/16/solid"

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex justify-between items-center my-4 p-5 border border-black rounded-lg w-80">
      <div className="flex flex-col">
        <p className="flex items-center">
          <CalendarDaysIcon className="size-5"/>
          <span className="font-light text-sm">01.21.2024 </span>
        </p>
        <p className="flex items-center">
          <ShoppingBagIcon className="size-5"/>
          <span>{totalProducts} articles</span>
        </p>
      </div>
      <p className="font-bold text-xl flex items-center">
        <span>${totalPrice}</span>
        <ChevronRightIcon className="size-9"/>
      </p>
    </div>
  );
}

export { OrdersCard };
