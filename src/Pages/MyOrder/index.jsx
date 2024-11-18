import { Layout } from "../../Components/Layout"
import {ShoppingCartContext} from "../../Context"
import { useContext } from "react"
import {OrderCard} from "../../Components/OrderCard"

function MyOrder(){

  const context = useContext(ShoppingCartContext)

  return(
    <Layout>
      <h1>My Order</h1>
      <div className="overflow-y-scroll flex-1">
        {
          context.order?.slice(-1)[0].products.map( product => (
            <OrderCard 
              title={product.title}
              id={product.id}
              imageUrl={product.images}
              price={product.price}
              key={product.id}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export {MyOrder}