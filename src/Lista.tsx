
interface Props{
    wiadmosc:Array<string>;
    a:string;
}


const Lista = (props: Props) =>{
    console.log(props)
    const wymowki = []
    wymowki.push()
    return(
        <>

            <h2>Lista</h2>
            <p>{props.wiadmosc}</p>
        </>
    )
}

export default Lista;