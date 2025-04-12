
interface ListaProps {
    messages: string[]
}


const Lista = ({messages}: ListaProps) =>{


    return(
        <>

            <h2>Lista Wymówek: </h2>
            <ul>
                {messages.map((w, index) => (
                    <li key={index}>{w}</li>
                ))}
            </ul>
        </>
    )
}

export default Lista;