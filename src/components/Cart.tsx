import {
  FC,
  useMemo,
  useState
} from "react";
import {
  CartItem,
  cartItems
} from "../constants/cartItem.ts";
import {cn} from "../lib/utils.ts";

const Cart: FC = () => {
  const [items] = useState<CartItem[]>(cartItems);
  const [isDonating, setIsDonating] = useState<boolean>(false);
  
  // Recalculate if the item list changes
  const total = useMemo(() => {
    let calculated = 0;
    items.forEach(item => {
      calculated += item.price * item.quantity;
    });
    return calculated;
  }, [items]);
  
  return (
    <div>
      <h1>Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex gap-2">
            <div>{item.name}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
          </div>
        ))}
        <div className="flex gap-2">
          <div>Total: ${total}</div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        Do you want to donate? {isDonating ? "Yes" : "No"}
        <div className="flex">
          <button className={cn("border-black px-4 py-2", isDonating && "border")} onClick={() => setIsDonating(true)}>Yea</button>
          <button className={cn("border-black px-4 py-2", !isDonating && "border")} onClick={() => setIsDonating(false)}>Nah</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;