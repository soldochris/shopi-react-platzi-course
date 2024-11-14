import { createContext, useState  } from "react"

const ShoppingCartContext = createContext()

function ShoppingCartProvider({children}){

  const [count, setCount] = useState(0)

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const [productToShow, setProductToShow] = useState({})

  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export {ShoppingCartProvider, ShoppingCartContext}