import { NavLink } from "react-router-dom"
import { useContext} from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function Navbar(){

  const context = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'

  return(
    <nav className='flex justify-between items-center w-full fixed z-10 top-0 py-5 px-8 text-sm font-light bg-white'>
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
            onClick={()=> context.setSearchByCategory("clothes")}
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
            onClick={()=> context.setSearchByCategory("electronics")}
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
            onClick={()=> context.setSearchByCategory("furniture")}
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
            onClick={()=> context.setSearchByCategory("toys")}
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
            onClick={()=> context.setSearchByCategory("others")}
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
        <li className="flex">
          <ShoppingCartIcon className="size-5 text-black"/>
          <span>
            {context.cartProducts.length}
          </span>
        </li>
      </ul>
    </nav>
  )
}

export {Navbar}