import { useState } from "react"
import Input from "./components/Input"
import Output from "./components/Output"
const App = () => {
  const [values, setValues] = useState({
    bill:"",
    people:"",
    tips:""
  })
  return (
     <main>
      <img src="./images/logo.svg" alt="logo" />

      <section id="calculator">
      <Input setValues={setValues} values={values} />
      <Output setValues={setValues} values={values}/>
    </section>
    </main>
  )
}

export default App