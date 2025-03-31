import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  //   const mo = {isFollowing: true, userName: 'Mas Onewe'}
  //   const maso = {isFollowing: true, userName: 'Mas Onewe'}
  return (
    <section className="App">
      <TwitterFollowCard
        initialisFollowing={true}
        userName="MasO"
        name="Mas Onewe"
      />
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
    </section>
  );
}
