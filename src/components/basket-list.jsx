import { BasketItem } from "./basket-item";

export const BasketList = ({data, onQuantityUp, onQuantityDown, onRemove}) => {
    return (
        <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Basket</h2>
        <table className="w-full table-auto border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2 text-left">
                Title
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-700 px-4 py-2 text-center">
                Count
              </th>
              <th className="border border-gray-700 px-4 py-2 text-right">
                Subtotal
              </th>
              <th className="border border-gray-700 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            { 
                data.map(item => 
                <BasketItem key={item.id} 
                    item={item}
                    onQuantityUp={onQuantityUp}
                    onQuantityDown={onQuantityDown}
                    onRemove={onRemove}
                />) 
            }
          </tbody>
        </table>
      </div>
    )
}
