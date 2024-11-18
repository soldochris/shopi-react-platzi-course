import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon,CheckIcon } from '@heroicons/react/24/outline'

function Card({data}){

  const context = useContext(ShoppingCartContext)

  function showProduct(productDetail){
    context.setProductToShow(productDetail)
    context.openProductDetail()
  }

  function addProductsToCart(event, productData){
    event.stopPropagation()
    context.setCartProducts([...context.cartProducts, productData])
    context.setCount(context.count + 1)
    context.openCheckoutSideMenu()
    console.log(context.cartProducts)

  }

  function renderIcon(id){

    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart){
      return(
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-gray-200 w-6 h-6 rounded-full m-2 p-1"
        >
          <CheckIcon className="size-6 text-green-700"/>
        </div>
      )
    } else {
      return(
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className="size-6 text-black"/>
        </div>
      )
    }

  }
  return(
    <div
      onClick={()=> showProduct(data)} 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    >
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.title} 
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}

export { Card}