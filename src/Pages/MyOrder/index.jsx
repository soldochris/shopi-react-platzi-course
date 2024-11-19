import { Link } from "react-router-dom";
import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  console.log(index)

  if(index === 'last') index = context.order.length - 1

  return (
    <Layout>
      <div className="flex w-80 relative items-center justify-center mb-3">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="text-black size-4" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="overflow-y-scroll flex-1">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            id={product.id}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
      <div className="min-w-96 m-5 px-3 py-2 bg-slate-200 rounded-lg">
        <p className="flex justify-between items-center">
          <span>
            Total: 
          </span>
          <span className="font-bold text-2xl">
            ${context.order?.[index].totalPrice}
          </span>
        </p>
      </div>
    </Layout>
  );
}

export { MyOrder };
