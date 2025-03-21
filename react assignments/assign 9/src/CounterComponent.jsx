import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterComponent = () => {
    const { count, increment, decrement } = useContext(CounterContext);

    return (
        <div className="text-center mt-4">
            <h2>Counter: {count}</h2>
            <button className="btn btn-success me-2" onClick={increment}>Increment</button>
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterComponent;
