import { useState, useEffect } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  photoData,
  updateToFavPhotoIds,
  openModal,
  favoritePhotos,
}) => {
  const { id, urls, user, location } = photoData;
  const isFavorited = favoritePhotos.includes(id);

  const handlePhotoClick = () => {
    openModal(photoData);
  };

  const changeState = () => updateToFavPhotoIds(id);

  return (
    <div className="photo-list__item" onClick={handlePhotoClick}>
      <PhotoFavButton selected={isFavorited} changeState={changeState} />
      <img
        src={urls.regular}
        alt={urls.regular}
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

export default PhotoListItem;
