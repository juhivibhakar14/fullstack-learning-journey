import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(false);

  function handleClick() {
    setLike(!like);
  }

  return (
    <>
      <button onClick={handleClick}>
        {like ? "❤️ Liked" : "🤍 Like"}
      </button>
    </>
  );
}

export default LikeButton;