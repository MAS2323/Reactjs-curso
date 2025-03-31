# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Los Estados en React

Un estado es un valor que cada vez que cambie va a renderizar nuestro componente

```js
const [board, setBoard] = useState(Array(9).fill(null));
```

en nuestro jemplo, el board que es nuesta variable y el setBoar que es la funcion de estado que usamos para actualizar nuestra variable

Tienes un error en la forma en que pasas los valores a los `Square`. En tu código, usas `{ Children }` como prop en `Square`, pero en React las props deben ser en minúscula (`children` en este caso).

### Problema:

1. **`Children` no está recibiendo el valor del board**
   - En el componente `Square`, el valor del `board` se pasa dentro de `{children}` (con minúscula), pero intentas acceder a `Children`, que no es una prop de React.
2. **Corrige la estructura de `Square`**
   - Usa `children` en lugar de `Children`.

### Solución:

```jsx
import "./App.css";
import { useState } from "react";

const Square = ({ children, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  const [board, setBoard] = useState([
    "x",
    "o",
    "x",
    "o",
    "x",
    "x",
    "o",
    "x",
    "o",
  ]);

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((value, index) => (
          <Square key={index} index={index}>
            {value}
          </Square>
        ))}
      </section>
    </main>
  );
}

export default App;
```

### Cambios clave:

✅ **`children` en lugar de `Children`**  
✅ **`value` en `board.map` en lugar de `_`**, para hacer más claro el código  
✅ **Se eliminó `updateBoard` porque no se usa en `Square`**

Con esta corrección, los valores del `board` ahora se mostrarán correctamente en la pantalla dentro de cada `Square`. 🚀

### Estudiar sobre el spread y rest operator

<!-- En Reactjs los estados siempre hay que tratarlos cmo inmutabes  -->

--- Las funciones de estado son asycronas: eso quiere decir que se ejecutan en funcion al tiempo
