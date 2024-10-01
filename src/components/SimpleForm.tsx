import {
  FC,
  useRef
} from "react";

const SimpleForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleCheckValues = () => {
    if (!formRef || !formRef.current) return;
    const formData = new FormData(formRef.current);
    
    const name = formData.get("name");
    const password = formData.get("password");
    
    console.log("Name: ", name);
    console.log("Password: ", password);
  }
  
  return (
    <div>
      <form ref={formRef}>
        <input type="text" placeholder="Enter your name" name="name"/>
        <input type="password" placeholder="Enter your password" name="password"/>
      </form>
      <div onClick={handleCheckValues}>Check The values!</div>
    </div>
  );
}

export default SimpleForm;