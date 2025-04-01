import './App.css'
import { createContext, useEffect, useState, useContext } from 'react';
import Card from "./components/Card"
import CardStyle from './components/Card/CardStyle';
import Counter from "./components/Counter";
import CounterReducer from './components/CounterReducer/CounterReducer';
import CounterWithEffect from './components/CounterWithEffect';
import NameForm from './components/NameForm';
import SearchPosts from './components/SearchPosts/SearchPosts';
import StaticComponent from './components/StaticComponent/StaticComponent';
import ToggleButton from './components/ToggleButton';
import UserList from './components/UserList/UserList';
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading';
import CounterWithCustomHook from './components/CounterWithCustomHook/CounterWithCustomHook';
import CounterWithReactMemo from './components/CounterWithReactMemo/CounterWithReactMemo';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // El componente ThemeProvider es un contexto que permite compartir el tema de la aplicación entre los componentes hijos.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? "#fff" : "#333",
        color: theme === 'light' ? "#333" : "#fff",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px 0",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      Cambiar a {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

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
      <h2>Estilización de Componentes</h2>
      <CardStyle />

      <hr />

      <h2>Trabajo con Datos y APIs</h2>
      <StaticComponent />
      <UserList />
      <UserListWithLoading />
      <SearchPosts />

      <hr />

      <h2>Componentes avanzados y Estado global</h2>
      <CounterReducer />      
      <h3>Uso de Context API</h3>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>

      <CounterWithCustomHook />
      <CounterWithReactMemo />
    </>
  );
}

export default App;