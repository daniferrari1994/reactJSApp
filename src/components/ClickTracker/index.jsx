import React, {useState, useEffect} from "react";
import "./styles.scss"

const ClickTracker = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState("");

    const increment = () => {
        setCount(count + 1);
        setDate(new Date().toLocaleString());
    }

    const decrement = () => {
        setCount(count - 1);
        setDate(new Date().toLocaleString());
    }

    useEffect(() => {
        console.log("se monto el componente");
    }, [])

    useEffect(() => {
        console.log("se actualizo el componente");
    }, [count]) 

    return (
        <div style={{
            marginTop: '70px'
        }}>
            <button onClick={increment}>Sumar</button>
            <button onClick={decrement}>Restar</button>
            <p>Cantidad de clicks {count}. Ultimo click: {date}</p>
        </div>
    )
}

export default ClickTracker
