import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import "./styles.css";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  function handleDelete(id){
    const filteredProducts = context.cartProducts.filter(product => product.id !== id )
    context.setCartProducts(filteredProducts)

  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center pt-4 px-5">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          onClick={() => context.closeCheckoutSideMenu()}
          className="size-5 cursor-pointer"
        />
      </div>
      <div className="overflow-y-scroll">
        {
          context.cartProducts.map( product => (
            <OrderCard 
              title={product.title}
              id={product.id}
              imageUrl={product.images}
              price={product.price}
              key={product.id}
              handleDelete={handleDelete} 
            />
          ))
        }
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
