import { useContext } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'


function ShoppingCart(){
  const context = useContext(ShoppingCartContext)

  function openCheckoutSideMenu(){
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }
  
  return(
    <div className='relative flex gap-0.5 items-center'
      onClick={()=> openCheckoutSideMenu()}
    >
      <ShoppingCartIcon className='w-6 h-6 text-gray-500 cursor-pointer'/>
      <div
        className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'
      >
        {context.cartProducts.length}
      </div>
    </div>
  )
}

export {ShoppingCart}