import { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const SimilarPhotoListItem = ({ similarPhoto, updateToFavPhotoIds }) => {
  const { id, urls, user, location } = similarPhoto;
  //manage state of button locally
  const [selected, setSelected] = useState(false);

  const changeState = () => {
    setSelected((prevSelected) => !prevSelected);
    updateToFavPhotoIds(id);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={selected} changeState={changeState} />
      <img
        src={urls.regular}
        alt={`Similar to ${id}`}
        className="photo-list__image"
      />
      <div className="photo-list__user-details">
        <img
          src={user.profile}
          alt={`user${user.username}`}
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

export default SimilarPhotoListItem;
