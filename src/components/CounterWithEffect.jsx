import { useEffect, useState } from 'react';

const CounterWithEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        //console.log(`El contador cambió a: ${count}`);
    }, [count]);

    return (
        <>
            <h2>Contador con efecto secundario</h2>
            <p>
                El contador está en: {count}
            </p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </>
    )    
}

export default CounterWithEffect;