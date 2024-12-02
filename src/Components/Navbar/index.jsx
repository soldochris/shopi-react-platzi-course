import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCart } from '../ShoppingCart'

function Navbar() {
  const context = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";

  //Login
  const login = localStorage.getItem("login");
  const parsedLogin = JSON.parse(login);
  const isUserLogged = context.login || parsedLogin;

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  //Has an account?
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 :true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage

  function handleSignOut() {
    const stringifiedLogin = JSON.stringify(false);
    localStorage.setItem("login", stringifiedLogin);
    context.setLogin(false);
  }

  function renderView() {
    if (hasUserAnAccount && !isUserLogged) {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            SignIn
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          <li className="text-black/60">
            {parsedAccount?.email}
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign Out
            </NavLink>
          </li>
        </>
      );
    }
  }

  return (
    <nav className="flex justify-between items-center w-full fixed z-10 top-0 py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={`${isUserLogged ? '/' : 'sign-in'}`}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => context.setSearchByCategory("furniture")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        { renderView() }
        <li className="flex items-center">
          <ShoppingCart/>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
