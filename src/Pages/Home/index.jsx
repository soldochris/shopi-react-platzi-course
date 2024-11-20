import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
function Home(){

  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <h1>Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          context.items?.map( (item) => (
            <Card data={item} key={item.id}/>
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export {Home}