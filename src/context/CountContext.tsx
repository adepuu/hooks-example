import {
  createContext,
  FC,
  ReactNode,
} from "react";
import useCounter from "../hooks/useCounter.ts";

interface CountContextProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const ctxDefaultValues: CountContextProps = {
  value: 0,
  increment: () => {},
  decrement: () => {}
}

// Context Declaration with default values
export const CountContext = createContext<CountContextProps>(ctxDefaultValues);

const CountProvider: FC<{children: ReactNode}> = ({children}) => {
  const [count, handleIncrement, handleDecrement] = useCounter();
  
  return (
    <CountContext.Provider value={{
      value: count,
      increment: handleIncrement,
      decrement: handleDecrement
    }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountProvider;