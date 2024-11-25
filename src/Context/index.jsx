import { createContext, useState, useEffect  } from "react"

const ShoppingCartContext = createContext()

function initializeLocalStorate(){
  const accountLocalStorage = localStorage.getItem('account')
  const loginLocalStorage = localStorage.getItem('login')
  let parsedAccount
  let parsedLogin

  //verifying if there is an account in local storage
  //otherwise setting an empty object for account
  if(!accountLocalStorage){
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountLocalStorage)
  }

  //verifying if there is login value in local storage
  //otherwise setting a false
  if(!loginLocalStorage){
    localStorage.setItem('login', JSON.stringify(false))
    parsedLogin = false
  } else {
    parsedLogin = JSON.parse(loginLocalStorage)
  }
}

function ShoppingCartProvider({children}){
  //Account
  const [account, setAccount] = useState({})

  //Login
  const [login, setLogin] = useState(false)

  //Open and Close Product Detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const [productToShow, setProductToShow] = useState({})

  //CartProducts
  const [cartProducts, setCartProducts] = useState([])

  //Order
  const [order, setOrder] = useState([])

  //Open and Close Checkout side menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //Get Products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
  
  //Search by Title
  const [searchByTitle, setSearchByTitle] = useState(null)

  //Search by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])
  
  
  //Filtering Items By Title
  function filteredItemsByTitle(items, searchByTitle){
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  function filteredItemsByCategory(items, searchByCategory){
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  function filterBy(searchType, items, searchByTitle, searchByCategory){
    if(searchType === "BY_TITLE"){
      return filteredItemsByTitle(items, searchByTitle)
    }

    if(searchType === "BY_CATEGORY"){
      return filteredItemsByCategory(items, searchByCategory)
    }

    if(searchType === "BY_TITLE_AND_CATEGORY"){
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if(!searchType){
      return items
    }
  }

  useEffect(()=>{
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))

    return () => {
      setSearchByTitle(null)
    }
    
  },[items, searchByCategory, searchByTitle])

  return(
    <ShoppingCartContext.Provider value={{
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      setIsCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setFilteredItems,
      setSearchByCategory,
      searchByCategory,
      account,
      setAccount,
      login,
      setLogin
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export {ShoppingCartProvider, ShoppingCartContext}