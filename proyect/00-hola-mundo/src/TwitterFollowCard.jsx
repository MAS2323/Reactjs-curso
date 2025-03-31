import { useState } from "react";

export function TwitterFollowCard({
  userName = "unknow",
  name,
  initialisFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialisFollowing);
  const imageSrc = `https://unavatar.io/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const addAt = (userName) => `@${userName}`;
  console.log(isFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="microlink" />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoUserName">{name}</strong>
          <span>{addAt(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
