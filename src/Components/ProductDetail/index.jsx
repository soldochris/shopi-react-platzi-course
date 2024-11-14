import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from "../../Context"
import "./styles.css"

function ProductDetail(){

  const context = useContext(ShoppingCartContext)

  return(
    <aside 
      className={`${context. isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center pt-4 px-5">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          onClick={() => context.closeProductDetail()}
          className="size-5 cursor-pointer"
        />
      </div>
      <figure className="pt-4 px-5">
          <img 
            src={context.productToShow.images} 
            alt={context.productToShow.title}
            className="w-full h-full rounded-lg" 
          />
        </figure>
        <p className="flex flex-col pt-4 px-5">
          <div className="flex justify-between">
            <span className="font-medium text-md">{context.productToShow.title}</span>
            <span className="font-bold text-2xl">${context.productToShow.price}</span>
          </div>
          <span className="pt-4 font-light text-sm">{context.productToShow.description}</span>
        </p>
    </aside>
  )
}

export {ProductDetail}