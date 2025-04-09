import {useState} from "react";
import * as React from "react";

interface Props{
    sendData: (a:string) => void
}

const Form = (props:Props) =>{



    const [textInput, setTextInput] = useState('') // ['', funkcja]
    // setTextInput("qwe") -> textInput="qwe"

    const [selectWymowka, setSelectWymowka] = useState('') // ['', funkcja]

    const [rangeInput, setRangeinput] = useState('') // ['', funkcja]

    const [rangeInput2, setRangeinput2] = useState('') // ['', funkcja]

    const [dateInput, setDateinput] = useState('') // ['', funkcja]

    const [textarea, setTextarea] = useState('') // ['', funkcja]

    const [checkbox, setCheckbox] = useState(false) // ['', funkcja]

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.sendData(textInput)
    }

    function handleTextInputChange(event: React.ChangeEvent<HTMLInputElement>){
        setTextInput(event.target.value)

    }

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectWymowka(event.target.value)

    }

    function handleRangeInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRangeinput(event.target.value)
    }

    function handleRangeInputChange2(event: React.ChangeEvent<HTMLInputElement>) {
        setRangeinput2(event.target.value)
    }

    function handleDateInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDateinput(event.target.value)
    }

    function handleTextareaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setTextarea(event.target.value)
    }

    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCheckbox(event.target.checked)
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
                        onChange={handleSelectChange}>
                    <option value="">Wybierz powód</option>
                    <option value="Brak zadania">Brak zadania</option>
                    <option value="Nieobecność">Nieobecność</option>
                    <option value="Rozmowanie na lekcji">Rozmawianie na lekcji</option>
                </select>
            </label>
            <label>
                Wiarygodność:
                <input type="range" name="wiarygodnosc" min={1} max={10} step={1}
                       value={rangeInput}
                       onChange={handleRangeInputChange}
                />
            </label>
            <label>
                Data zdarzenia:
                <input type="date"
                       name="data"
                       value={dateInput}
                       onChange={handleDateInputChange}
                />
            </label>
            <label>
                Poziom kreatywności:
                <input type="range" name="kreatywnosc" min={1} max={5} step={1}
                       value={rangeInput2}
                       onChange={handleRangeInputChange2}/>
            </label>
            <label>
                Szczegóły:
                <textarea name="szczegoly"
                          value={textarea}
                          onChange={handleTextareaChange}/>
            </label>
            <label>
                Czy to pilna wymówka?
                <input type={"checkbox"} name="pilnaWymowka" checked={checkbox} onChange={handleCheckboxChange}/>
            </label>
            <button type="submit">Wygeneruj</button>

        </form>
    )
}



export default Form;