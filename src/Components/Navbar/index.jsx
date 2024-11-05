import { NavLink } from "react-router-dom"

function Navbar(){

  const activeStyle = 'underline underline-offset-4'

  return(
    <nav className='flex justify-between items-center w-full fixed z-10 py-5 px-8 text-sm font-light'>
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          chris@inspired-code.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({isActive})=>
              isActive ? activeStyle: undefined
            }
          >
            Sign In
          </NavLink>
        </li>
        <li>
          🛒0
        </li>
      </ul>
    </nav>
  )
}

export {Navbar}