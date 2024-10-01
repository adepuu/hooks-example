import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(prev => ++prev);
  };
  
  const handleDecrement = () => {
    setCount(prev => {
      return --prev;
    })
  }
  return [count, handleIncrement, handleDecrement] as const;
}

export default useCounter;