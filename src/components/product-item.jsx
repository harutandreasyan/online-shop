export const ProductItem = ({ item, onMoveToCart }) => {
    const { id, title, price, category, photo } = item;

    return (
        <div
            key={id}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
            <img
              src={photo || "https://via.placeholder.com/150"}
              alt={title}
              className="w-24 h-24 mx-auto rounded-full border-4 border-purple-400 mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{title}</h2>
            <p className="text-center text-gray-300">{price} USD</p>
            <small className="block text-center text-gray-400">
              {category}
            </small>
            <button
                onClick={() => onMoveToCart(item)}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition-colors"
            >
              Move
            </button>
        </div>
    );
};
