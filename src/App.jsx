import './App.css'
import Card from "./components/Card"
import Counter from "./components/Counter";
import ToggleButton from './components/ToggleButton';

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <>
      <h1>¡Hola Mundo!</h1>
      <Card title="Card 1" description="Esta es una descripción" />
      <Card title="Card 2" description="Esta es otra descripción" />
      <Card title="Card 3" description="Esta es la descripción de la card 3" />
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>

      <h2>Contador</h2>
      <Counter />
      <ToggleButton />

    </>
  );
}

export default App;