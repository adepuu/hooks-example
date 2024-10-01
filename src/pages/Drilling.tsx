import {
  FC,
  useContext,
} from "react";
import FirstChild from "../components/Drilling/First";
import {CountContext} from "../context/CountContext.tsx";

const Page: FC = () => {
  const { increment, decrement } = useContext(CountContext);
  return (
    <div className="p-10 border border-black">
      Parent
      <div className="flex gap-10 mb-4">
        <button onClick={increment} className="px-4 py-2 border-blue border">
          Increment
        </button>
        <button onClick={decrement} className="px-4 py-2 border-blue border">
          Decrement
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <FirstChild />
        <FirstChild />
        <FirstChild />
      </div>
    </div>
  );
}

export default Page;