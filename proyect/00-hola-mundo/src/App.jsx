import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  //   const mo = {isFollowing: true, userName: 'Mas Onewe'}
  //   const maso = {isFollowing: true, userName: 'Mas Onewe'}

  const users = [
    {
      userName: "MasO",
      name: "Mas Onewe",
      isFollowing: true,
    },
    {
      userName: "Onewe",
      name: "Vicencio",
      isFollowing: false,
    },
    {
      userName: "23OM",
      name: "Consuelo",
      isFollowing: true,
    },
    {
      userName: "Comasa",
      name: "Remigio",
      isFollowing: true,
    },
    {
      userName: "Osma",
      name: "Samuel",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialisFollowing={isFollowing}
            name={name}
          />
        );
      })}
    </section>
  );
}
