import Greeting from "./Components/Greeting";
import Greeting1 from "./Components/Greeting1";


function App() {
  

  return (
    <>
      <Greeting  name={"john"} age={20}/>     

      <Greeting1 plcae={"Ernakulam"} pincode = {123456}/>
    </>
  )
}

export default App
