import {FC} from "react";
import SecondChild from "./Second.tsx";

const FirstChild: FC = () => {
  return (
    <div className="p-10 border border-black">
      First Child
      <SecondChild  />
    </div>
  );
}

export default FirstChild;