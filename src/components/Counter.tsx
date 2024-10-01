import {
  FC,
  useEffect,
  useRef,
  useState
} from "react";
import {cn} from "../lib/utils.ts";

interface CounterProps {
  increment: () => void;
  decrement: () => void;
  count: number;
}

const Counter: FC<CounterProps> = ({ increment, decrement, count }) => {
  // array of [value, setter]
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const resultElement = useRef<HTMLSpanElement>(null);
  
  // Mouse event handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  // Called on count change
  useEffect(() => {
    if (!resultElement || !resultElement.current) return;
    const parsedResult = parseInt(resultElement.current.innerText);
    console.log("Current inner text of result is: ", parsedResult)
    if (parsedResult % 5 == 0) {
      resultElement.current.classList.add("text-green-500");
    } else {
      resultElement.current.classList.remove("text-green-500");
    }
    
  }, [count]);
  
  return (
    <div>
      <h1 className="text-lg">Counter</h1>
      <p onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>Count: <span id="result" ref={resultElement} className={cn("font-bold", isHovering && "text-red-500 scale-110")}>{count}</span></p>
      <div className="flex gap-4">
        <button onClick={increment} className="px-4 py-2 rounded border border-black">Increment</button>
        <button onClick={decrement} className="px-4 py-2 rounded border border-black">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;