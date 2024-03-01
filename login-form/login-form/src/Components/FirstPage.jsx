import { useNavigate } from "react-router-dom"


export default function FirstPage(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/Login')
    }
    return (
        <div>
            <h1>Hello <br />
                Go to the login route
            </h1>
            <button onClick={handleClick}>Login Route</button>
        </div>
    )
}