export function Homeworks({homeworks}){
    return <div>
        {homeworks.map(function (Homework){
            return <div>
                <h1>{Homework.topic}</h1>
                <h2>{Homework.lason}</h2>
                <button>{Homework.checked == true ? "Checked": "Mark as Checkde" }</button>
            </div>
        })}
    </div>
}

/*

    title: asaadf
    lason: gigha
    button: Done

*/