import { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [selected, setSelected] = useState(false);

  const changeState = () => {
    setSelected(selected === true ? false : true);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon changeState={changeState} selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
