import { TrashIcon } from "@heroicons/react/24/outline";

function OrderCard(props){
  const  {id, title, imageUrl, price, handleDelete} = props

  return (
    <div className="flex justify-between items-center pt-4 px-5">
      <div className="flex items-center gap-2 ">
        <figure className="w-20 h-20">
          <img  className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="text-lg font-medium">${price}</p>
        <TrashIcon 
          className="size-5 text-black cursor-pointer hover:text-red-700"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  )
}

export {OrderCard}