import "./ProductCard.css";
import { add, remove } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch()
  const [isInCart, setIsInCart] = useState(false)
  const cartList = useSelector(state => state.cartState.cartList)

  useEffect(() => {
    const isProductIn = cartList.find((item)=> item.id === product.id);
    isProductIn ? setIsInCart(true) : setIsInCart(false)

  }, [cartList, product])
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          isInCart ? <button  onClick={() => dispatch(remove(product))} className=" bg-red-500 hover:bg-red-600 text-white  rounded remove"> Remove</button> : <button onClick={() => dispatch(add(product))}>Add To Cart</button>

        }

      </div>
    </div>
  )
  // <button onClick={() =>dispatch(remove(product))} className="mt-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"> Remove</button>
}
