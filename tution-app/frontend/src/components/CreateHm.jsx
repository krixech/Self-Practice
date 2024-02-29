import { useState } from "react";

export function CreateHm(){

    const [topic , setTopic] = useState("");
    const [lason , setLason] = useState("");

    return <div>
        <input 
        style={{
            margin: 10,
            padding: 10
        }} 
        id="topic" type="text" placeholder="Topic" onChange={(e) => {
            const value = e.target.value
            setTopic(e.target.value)
        }} /> <br />

        <input 
        style={{
            margin: 10,
            padding: 10
        }} 
        id="lason" type="text" placeholder="Lason" onChange={(e) => {
            const value = e.target.value
            setLason(e.target.value)
        }} /><br />

        <button
        style={{
            margin: 10,
            padding: 10
        }} onClick={() => {
            fetch("http://localhost:3000/checked",{
                method: "POST",
                body: json.stringify({
                    topic,
                    lason
                }),
                headers: {
                    "Contect-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Checked completed")
            })
        }}
        >
            Check the Homework
        </button>
    </div>
}