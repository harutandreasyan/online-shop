import { ProductItem } from "./product-item"

export const ProductList = ({data, onMoveToCart}) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          { 
            data.map(item => 
              <ProductItem key={item.id} 
                item={item}
                onMoveToCart={onMoveToCart}
              />) 
          }
      </div>
    )
}