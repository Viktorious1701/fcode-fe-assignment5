import { useState } from "react";
import useFetch from "./useFetch";
const CounterFetch = () => {
   
    const [counter, setCounter] = useState(1);
    const {data, status} = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`);
    const max = useFetch(`https://jsonplaceholder.typicode.com/posts/`);
    const handleIncrease = () => {
        if( counter < max.data.length   ){
            setCounter(counter + 1);
            
        }
    }
    const handleDecrease = () => {
        if( counter > 1){
            setCounter(counter - 1);
        }
    }

    return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>Data: {status}</h1>
        
        {data && ( // Render data only when available
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                    </tbody>
                </table>
            )}

    </div>   
    );

}
export default CounterFetch;