import { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData, toggleFavorite }) => {
  const { id, urls, user, location } = photoData;
  const [selected, setSelected] = useState(false);

  const changeState = () => {
    setSelected((prevSelected) => !prevSelected);
    toggleFavorite(id);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={selected} changeState={changeState} />
      <img
        src={urls.regular}
        alt={urls.regular}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={user.profile}
          alt={`user${urls.username}`}
          className="photo-list__user-profile "
        />
        <div className="photo-list__user-info">
          {user.name}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
