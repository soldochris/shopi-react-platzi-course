import { Layout } from "../../Components/Layout"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import {ShoppingCartContext} from "../../Context"

function SignIn(){
  const context = useContext(ShoppingCartContext)
  const [view, setView] =useState('user-info')

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.stringify(account)
  //has account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage

  function renderLogin(){
    return(
      <div className="flex flex-col w-80">
      <p>
        <span className="text-sm font-light">Email: </span>
        <span>{ parsedAccount?.email }</span>
      </p>
      <p>
        <span className="text-sm font-light">Password: </span>
        <span>{ parsedAccount?.password }</span>
      </p>
      <Link
        to="/"
      >
        <button
          className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
        >
          Log In
        </button>
      </Link>
      <div className="text-center">
        <a href="/" className="font-light text-xs underline underline-offset-4">
          Forgot my password
        </a>
      </div>
      <button 
        className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
        onClick={ () => setView('create-user-info')}
        disabled={!hasUserAnAccount}
      >
        Sign Up
      </button>
    </div>
    )
  }

  function renderCreateUserInfo(){
    //TODO: create render view
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  return(
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </Layout>
  )
}

export { SignIn }