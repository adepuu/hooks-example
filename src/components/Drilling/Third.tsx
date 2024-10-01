import {FC} from "react";
import FourthChild from "./Fourth.tsx";

const ThirdChild: FC = () => {
  return (
    <div className="p-10 border border-black">
      Third Child
      <FourthChild />
    </div>
  );
}

export default ThirdChild;