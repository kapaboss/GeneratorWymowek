import './App.css'
import Form from "./Form.tsx";
import "./Form.css"
import Lista from "./Lista.tsx";
import {useState} from "react";

function App() {

   const [jakisstring, setjakisString] = useState<string>("init value")

    let ll = []

    function getString(m:string){
        console.log(m)
        ll.push(m)
        console.log(ll)

    }


  return (
    <>
        <Form sendData={getString} />
        <h2>Lista: Wymówek</h2>
        <Lista wiadmosc={jakisstring}  a={"nowy string"} />

    </>
  )
}

export default App
