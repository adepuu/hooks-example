import {
  FC,
  useEffect,
  useState
} from "react";
import {cn} from "../lib/utils.ts";

interface CounterProps {
  updateParentCount: (count: number) => void;
}

const Counter: FC<CounterProps> = ({ updateParentCount }) => {
  // array of [value, setter]
  const [count, setCount] = useState<number>(1);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  
  // Onclick handlers
  const handleIncrement = () => {
    setCount(prev => ++prev);
  };
  
  const handleDecrement = () => {
    setCount(prev => {
      if (prev === 0) {
        return prev;
      }
      return --prev;
    })
  }
  
  // Mouse event handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  // Called on every render
  useEffect(() => {
    console.log("Will be called on every render");
    console.log("Child Components rendered");
  });
  
  // Called on count change
  useEffect(() => {
    updateParentCount(count);
  }, [count, updateParentCount]);
  
  // Called on first render only
  useEffect(() => {
    console.log("Will be called on first render");
    console.log("Child Components rendered");
  }, []);
  
  return (
    <div>
      <h1 className="text-lg">Counter</h1>
      <p onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>Count: <span className={cn("font-bold", isHovering && "text-red-500 scale-110")}>{count}</span></p>
      <div className="flex gap-4">
        <button onClick={handleIncrement} className="px-4 py-2 rounded border border-black">Increment</button>
        <button onClick={handleDecrement} className="px-4 py-2 rounded border border-black">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;