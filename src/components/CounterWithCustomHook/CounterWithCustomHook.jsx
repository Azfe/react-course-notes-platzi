import useCounter from '../../hooks/useCounter';

const CounterWithCustomHook = () => {
    const { count, increment, decrement, reset, set } = useCounter(0);

    const handleInputChange = (e) => {
        const numericValue = Number(e.target.value); // Convertir el valor a número
        set(numericValue);
    };

    return (
        <div className="card">
            <h3>Counter with Custom Hook</h3>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <input
                type="text"
                placeholder='Ingresa el valor inicial'
                value={count}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default CounterWithCustomHook;