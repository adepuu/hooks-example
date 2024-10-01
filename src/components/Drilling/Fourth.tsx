import {
  FC,
  useContext
} from "react";
import {CountContext} from "../../context/CountContext.tsx";

const FourthChild: FC = () => {
  const { value } = useContext(CountContext);
  return (
    <div className="p-10 border border-black">
      Count: {value}
    </div>
  );
}

export default FourthChild;