# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Curso 1

La base de la reutilizacion de los componentes en react son las propiedades, los parametros, las funciones etc

### Componentes

Los cmponentes son funciones que devuelven un elemento y reactjs renderiza elementos que devuelven estas funciones

```js
<TwitterFollowCard
  formantUserName={formantUserName}
  isFollowing
  userName="MasO"
  name="Mas Onewe"
/>
```

Las props son inmutables, quiere decir que su valor no se puede modificar por modificar
--- La props children hace referencia al elemento envuelto por un componente: ejemplo

```js
<TwitterFollowCard isFollowing userName="MasO">
  Mas Onewe -> en nuestro ejemplo esto pasa a ser el children
</TwitterFollowCard>
```

## Los estados en Reactjs

--- Se usan los estados en Reactjs para manejar los cambios que sufren algunos componentes que
forman nuestra aplicacion

```js
     <TwitterFollowCard isFollowing userName="MasO" name="Mas Onewe" />
      <TwitterFollowCard
        isFollowing={false}
        userName="elonmusk"
        name="Vicencio Onewe"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="vxm"
        name="Victoriano Mas"
      />
      <TwitterFollowCard isFollowing userName="sam" name="Samuel Mas" />
```

Cuando se renderiza un componente padre tambien se renderizaran sus hijos independientemente

```sh
const mo = {isFollowing: true, userName: 'Mas Onewe'}
const maso = {isFollowing: true, userName: 'Mas Onewe'}

```

En react native, el estado inicial solo se inicializa una vez,
si estamos utilizando una prop para inicializar un estado este solo se ejecutara o inicializara una sola ves
