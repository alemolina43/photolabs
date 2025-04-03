import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoData }) => {
  const { urls, user, location } = photoData;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
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
