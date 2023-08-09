import { useDispatch } from "react-redux";
import { remove, updateQuantity } from "../store";
import "./CartCard.css";
import { useState } from "react";
export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch()

  const [value, setValue] = useState(product.quantity)
  const handleChange = (e) => {
    const input = e.target.value
    setValue(input)
    dispatch(updateQuantity({ product, input }))
  }
  return (
    <div className="cartCard">
      <div className="relative">
        <img src={image} alt={name} />
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
          {product.quantity}
        </span>
      </div>
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <div className="flex items-center mt-2">
        <span className="mr-2">Quantity:</span>
        <input
          type="number"
          min={1}
          max={1000}
          value={value}
          onChange={handleChange}
          className="w-16 px-2 py-1 border rounded"
        />
      </div>
      <button onClick={() => dispatch(remove(product))} className="mt-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded remove">
        Remove
      </button>

    </div>
  )
}
