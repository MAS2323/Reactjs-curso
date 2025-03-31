# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```sh

// creacion de componentes en ReactJs

const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

// En ReactJs usamos las props o propiedades para pasar datos de un componente a otro
// generalmente el aso de datos es etre un componente padre a hijo
// En este eemplo title pasa a ser nuestra props, props puede ser cualquier cosa
const App = () => {
  return (
    <>
      <h2>Functional Arow Component</h2>

      {/* Puedes usar tus componentes de forma inlimitada en tu programa de ReactJs */}
      {/* Pasandole cualquier tipo de props a nuestro cmponente padre, para asi acceder a esas props desde el componente hijo y hacer cosas con esos componentes en nuestra app: como modificar la interfaz */}
      <Card
        title="Star Wars"
        rating={5}
        isCool={true}
        actors={[{ name: "Actors" }]}
      />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </>
  );
};
export default App;

```

```sh

## Uso de las Props en ReactJs
// creacion de componentes en ReactJs

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

// En ReactJs usamos las props o propiedades para pasar datos de un componente a otro
// generalmente el aso de datos es etre un componente padre a hijo
// En este eemplo title pasa a ser nuestra props, props puede ser cualquier cosa
const App = () => {
  return (
    <div className="card-container">
      <Card
        title="Star Wars"
        rating={5}
        isCool={true}
        actors={[{ name: "Actors" }]}
      />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};
export default App;

```

--- useState() es una función o un Hook que crea internamente una variable donde podremos almacenar el estado de nuestro componente.
--- Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la función para modificarla.

```sh
### En react native todo lo que empieza con use es considerado como una Hook o una funcion

// Los estados en ReactJs
// Los hooks en ReactJs
import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};
// nueva forma de usar props en recatJs
Card.propTypes = {
  title: PropTypes.string.isRequired,
};

const App = () => {
  const [number, setNumber] = useState(0);

  const Sumar = () => {
    setNumber(number + 1);
  };
  const Restar = () => {
    setNumber(number - 1);
  };
  const Reset = () => {
    setNumber(0);
  };
  return (
    <div>
      <h1>Contador: {number}</h1>
      <button onClick={Sumar}>Sumar</button>
      <button onClick={Restar}>Restar</button>
      <button onClick={Reset}>Volver a 0</button>
    </div>
  );
};
export default App;



// Los estados en ReactJs
// Los hooks en ReactJs
import { useState } from "react";

const Card = ({ title }) => {
  // los estados se actualizan o toman su valor inicial al actualizar la pagina
  const [hasLiked, setHasliked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasliked(!hasLiked)}>
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

// Dentero del parentesis del useState puedes proporcinal el valor por defecto de este estado
const App = () => {
  return (
    <div className="card-container">
      <Card
        title="Star Wars"
        rating={5}
        isCool={true}
        actors={[{ name: "Actors" }]}
      />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};
export default App;


```

```sh
## El Hook useEffect

 Como su nombre lo indica, este hook nos permite definir efectos. Los efectos en esta librería de JavaScript nos permiten ejecutar un trozo de código según el momento en el que se encuentre el ciclo de vida de nuestro componente.

## El useEffet ejecuta el efecto dos veces cuando se monta el componente
### si queremos evitar la duplicaion teneos que eliminar el  StrictMode de main.jsx

### cunado estamos usano el useState no es recomendable llamar el valor de un state dentro de la funcion de la misma
setCount((prevState) => prevState + 1)
# hay que usar un estado previo
 <StrictMode>
    <App />
  </StrictMode>

## formas de usar el useEffect
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
    # en este caso, nuesro use useEffect se ejecutara por cada vez qu cambien los valores del corchete [hasLiked, title]
  }, [hasLiked, title]);

  #  otra forma de usar useEfect
  # cuando no pasamos nada al [] el componente useEffcet solo se ejecutara una vez cuando semonte el componente
  useEffect(() =>{

  }, [])


```

### Renderizacion condicional o conditional rendering

--- Es cuando queremos que se despliegue algo en nuestra pantalla en funciona a una condicion
--- En este caso usaremos el hook o funcion de useEffect
--- un ejemplo basico podria ser el siguinete {count || null}

```sh
      <h2>
        {title} <br /> {count || null}
      </h2>
```

```sh

// Los estados en ReactJs
// Los hooks en ReactJs
import { useEffect, useState } from "react";

const Card = ({ title }) => {
  // useEffect useeffect es otra herramienta de ReactJs cuya funcion es la siguiente
  const [hasLiked, setHasliked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked, title]);

  // otra forma de usar useEfect

  // useEffect(() => {
  //   console.log("CARD RENDER");
  // }, []);

  // Vamos a ver ahora la renderizacion de elementos por condiciones
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count || null}
      </h2>

      <button onClick={() => setHasliked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

// Dentero del parentesis del useState puedes proporcinal el valor por defecto de este estado
const App = () => {
  return (
    <div className="card-container">
      <Card
        title="Star Wars"
        rating={5}
        isCool={true}
        actors={[{ name: "Actors" }]}
      />
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
};
export default App;

```
