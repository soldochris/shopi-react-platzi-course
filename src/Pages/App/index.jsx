import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartProvider,initializeLocalStorage, ShoppingCartContext } from '../../Context'
import {Home} from '../Home'
import {MyAccount} from '../MyAccount'
import {MyOrder} from '../MyOrder'
import {MyOrders} from '../MyOrders'
import {NotFound} from '../NotFound'
import {SignIn} from '../SignIn'
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import './App.css'

function AppRoutes(){
  //Global Context
  const context = useContext(ShoppingCartContext)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Login
  const login = localStorage.getItem('login')
  const parsedLogin = JSON.parse(login)

  //Has an account?
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true 
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 :true
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage
  const isUserLogged = context.login || parsedLogin

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && isUserLogged ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    { path: '/clothes', element: hasUserAnAccount && isUserLogged ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/electronics', element: hasUserAnAccount && isUserLogged ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/furniture', element: hasUserAnAccount && isUserLogged ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    { path: '/toys', element: hasUserAnAccount && isUserLogged ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    { path: '/others', element: hasUserAnAccount && isUserLogged ? <Home/> : <Navigate replace to={'/sign-in'}/>},
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> }
  ])

  return routes
}

function App() {

  initializeLocalStorage()

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
