import {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <div>
            <h3>Contador con useReducer</h3>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Incrementar</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrementar</button>
        </div>
    )
}

export default CounterReducer;