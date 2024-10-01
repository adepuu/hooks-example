import {
  FC,
  useEffect,
} from "react";
import Counter from "../components/Counter";
import SimpleForm from "../components/SimpleForm.tsx";
import useCounter from "../hooks/useCounter.ts";

const Home: FC = () => {
  const [count, handleIncrement, handleDecrement] = useCounter();
  
  useEffect(() => {
    const result = document.getElementById("result");
    if (!result) return;
    console.log("(PARENT) Current inner text of result is: ", result.innerText)
  }, [count]);
  console.log("Parent Home rendered with new value from child: ");
  return (
    <div>
      <Counter count={count} increment={handleIncrement} decrement={handleDecrement}/>
      <br/>
      <br/>
      <br/>
      <SimpleForm />
    </div>
  );
}

export default Home;