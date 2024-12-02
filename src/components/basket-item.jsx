export const BasketItem = ({
    item: { id, title, price, count },
    onQuantityUp,
    onQuantityDown,
    onRemove
}) => {
    return (
        <tr key={id} className="hover:bg-gray-700">
            <td className="border border-gray-700 px-4 py-2">{title}</td>
            <td className="border border-gray-700 px-4 py-2">{price.toFixed(2)} USD</td>
            <td className="border border-gray-700 px-4 py-2 text-center">{count}</td>
            <td className="border border-gray-700 px-4 py-2 text-right">{(count * price).toFixed(2)} USD</td>
            <td className="border border-gray-700 px-4 py-2 text-center">
                <button
                    onClick={() => onQuantityUp({ id, title, price, count })}
                    className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-500 mx-1"
                >
                    +
                </button>
                <button
                    onClick={() => onQuantityDown({ id, title, price, count })}
                    className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-500 mx-1"
                >
                    -
                </button>
                <button
                    onClick={() => onRemove({ id })}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-500 mx-1"
                >
                    X
                </button>
            </td>
        </tr>
    );
};
