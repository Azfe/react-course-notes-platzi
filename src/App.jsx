import './App.css'
import Card from "./components/Card"
import CardStyle from './components/Card/CardStyle';
import Counter from "./components/Counter";
import CounterWithEffect from './components/CounterWithEffect';
import NameForm from './components/NameForm';
import StaticComponent from './components/StaticComponent/StaticComponent';
import ToggleButton from './components/ToggleButton';
import UserList from './components/UserList/UserList';
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading';

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

      <h3>Contador</h3>
      <Counter />
      <ToggleButton />
      <h3>Formulario de nombre</h3>
      <NameForm />
      <CounterWithEffect />
      <h3>Agregar estilos en React</h3>
      <CardStyle />

      <hr />

      <h2>Trabajo con Datos y APIs</h2>      
      <StaticComponent />
      <UserList />
      <UserListWithLoading />
    </>
  );
}

export default App;