import "./styles.css"
import { XMarkIcon } from '@heroicons/react/24/outline'

function ProductDetail(){
  return(
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded bg-white">
      <div className="flex justify-between items-center pt-4 px-5">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon className="size-5" />
      </div>
    </aside>
  )
}

export {ProductDetail}