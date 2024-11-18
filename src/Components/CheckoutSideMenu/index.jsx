import { useContext } from "react";
import { XMarkIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext);

  function handleDelete(id){
    const filteredProducts = context.cartProducts.filter(product => product.id !== id )
    context.setCartProducts(filteredProducts)

  }

  function handleCheckOut(){
    const orderToAdd = {
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
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
      <div className="overflow-y-scroll flex-1">
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
      <div className="m-5 px-3 py-2 bg-slate-200 rounded-lg">
        <p className="flex justify-between items-center">
          <span>
            Total: 
          </span>
          <span className="font-bold text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
      </div>
      <button 
        className="flex bg-lime-500  m-5 px-3 py-2 rounded-lg justify-center items-center hover:text-white"
        onClick={()=> handleCheckOut()}
      >
        Checkout 
        <ShoppingBagIcon className="size-5 ml-1"/>
      </button>
    </aside>
  );
}

export { CheckoutSideMenu };
