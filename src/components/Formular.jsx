import { useState } from "react";

export default function Formular(props) {
    const [name, setName] = useState("")
    const [alter, setAlter] = useState("")
    
    function add() {
        const input = {
            name,
            alter
        }
        console.log(input)
    }
    return (
        <>
            <h1>Formular mit useState</h1>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" name="Name" />
            <input onChange={(e) => setAlter(e.target.value)} type="number" placeholder="Alter" name="Alter" title="Alter" />
            <button onClick={() => add() }>Submit</button>
            <p> mein name ist {name}</p>
            <div>
                <h2>Übermittelte Daten:</h2>
                <p>Name: {name}</p>
                <p>Alter: { alter }</p>
            </div>
            


        </>
    )
}