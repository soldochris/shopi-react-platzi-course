import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
function Home(){

  const context = useContext(ShoppingCartContext)

  function renderView() {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We do not have anything</div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-2xl">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product"
        className="rounded-lg border border-black w-96 px-3 py-2 mb-4"
        onChange={(event)=> context.setSearchByTitle(event.target.value) }
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        { renderView() }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export {Home}