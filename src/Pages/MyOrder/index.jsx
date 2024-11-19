import { Link } from "react-router-dom";
import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 relative items-center justify-center mb-3">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="text-black size-4" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="overflow-y-scroll flex-1">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            title={product.title}
            id={product.id}
            imageUrl={product.images}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </Layout>
  );
}

export { MyOrder };
