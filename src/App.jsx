import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "",
    },
    {
      id: 2,
      title: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      photo: "",
    },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "",
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "",
    },
    {
      id: 7,
      title: "Notebook",
      price: 4.99,
      category: "Stationery",
      photo: "",
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 34.99,
      category: "Gaming",
      photo: "",
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 14.99,
      category: "Accessories",
      photo: "",
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 25.99,
      category: "Electronics",
      photo: "",
    },
  ]);

  const moveToCart = product => {
    const found = basket.find(item => item.id === product.id)
    if(found) {
      found.count++
      setBasket([...basket])
    } else {
      setBasket([...basket, {...product, count: 1}])
    }
  }

  const quantityUp = product => {
    /* variant - 1
      const found = basket.find(item => item.id === product.id)
      found.count++
      setBasket([...basket])
    */
   
    /* variant - 2  */
    setBasket(basket.map(item =>
      item.id != product.id ? item: {...item, count: item.count + 1}
    ))
  }

  const quantityDown = product => {
    const found = basket.find(item => item.id === product.id)
    found.count--
    if(found.count === 0) {
      removeItem(product)
    } else setBasket([...basket])
  }

  const removeItem = (product) => {
    setBasket(basket.filter(item =>
      item.id !== product.id
    ))
  }
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-400">
        Online Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={item.photo || "https://via.placeholder.com/150"}
              alt={item.title}
              className="w-24 h-24 mx-auto rounded-full border-4 border-purple-400 mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{item.title}</h2>
            <p className="text-center text-gray-300">{item.price} USD</p>
            <small className="block text-center text-gray-400">
              {item.category}
            </small>
            <button onClick={() => moveToCart(item)} className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition-colors">
              Move
            </button>
          </div>
        ))}
      </div>
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
            {basket.map((item) => (
              <tr key={item.id} className="hover:bg-gray-700">
                <td className="border border-gray-700 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {item.price.toFixed(2)} USD
                </td>
                <td className="border border-gray-700 px-4 py-2 text-center">
                  {item.count}
                </td>
                <td className="border border-gray-700 px-4 py-2 text-right">
                  {(item.count * item.price).toFixed(2)} USD
                </td>
                <td className="border border-gray-700 px-4 py-2 text-center">
                  <button onClick={() => quantityUp(item)} className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-500 mx-1">
                    +
                  </button>
                  <button onClick={() => quantityDown(item)} className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-500 mx-1">
                    -
                  </button>
                  <button onClick={() => removeItem(item)} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500 mx-1">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
