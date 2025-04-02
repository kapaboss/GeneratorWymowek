import {useState} from "react";
import * as React from "react";



const Form = () =>{

    const [textInput, setTextInput] = useState('') // ['', funkcja]
    // setTextInput("qwe") -> textInput="qwe"

    const [selectWymowka, setSelectWymowka] = useState('') // ['', funkcja]

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log(textInput)
        console.log(selectWymowka)
    }

    function handleTextInputChange(event: React.ChangeEvent<HTMLInputElement>){
        setTextInput(event.target.value)

    }

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectWymowka(event.target.value)

    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Imie:
                <input
                    type="text"
                    name="input"
                    value = {textInput}
                    onChange={handleTextInputChange}
                    placeholder={"Wpisz imie..."}
                />
            </label>
            <label>
                Powód Wymówki:
                <select name="wymowka"
                        value={selectWymowka}
                        onChange={handleChange}>
                    <option value="">Wybierz powód</option>
                    <option value="Brak zadania">Brak zadania</option>
                    <option value="Nieobecność">Nieobecność</option>
                    <option value="Rozmowanie na lekcji">Rozmawianie na lekcji</option>
                </select>
            </label>
            <button type="submit">Wygeneruj</button>

        </form>
    )
}



export default Form;