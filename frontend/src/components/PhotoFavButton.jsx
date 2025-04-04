import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ selected, changeState }) => {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon changeState={changeState} selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
