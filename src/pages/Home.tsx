import {
  FC,
  useState
} from "react";
import Counter from "../components/Counter";

const Home: FC = () => {
  const [countFromChild, setCountFromChild] = useState<number>(0);
  console.log("Parent Home rendered with new value from child: ", countFromChild);
  return (
    <div>
      <Counter updateParentCount={(count) => setCountFromChild(count)} />
    </div>
  );
}

export default Home;