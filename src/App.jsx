import { Input_add } from "../components/Input_add"
import { Input_del } from "../components/Input_del"
import { Titulo } from "../components/Titulo"
import { Del } from "../components/Del"

function App() {
  

  return (
    <>
      <Titulo />     
        <form action="">
          <Input_add />
          <Input_del />
          <Del />
        </form>
      
    </>
  )
}

export default App
