import {FC} from "react";
import ThirdChild from "./Third.tsx";

const SecondChild: FC = () => {
  return (
    <div className="p-10 border border-black">
      Second Child
      <ThirdChild />
    </div>
  );
}

export default SecondChild;