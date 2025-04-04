import PhotoFavButton from "./PhotoFavButton";

const SimilarPhotoListItem = ({ similarPhoto }) => {
  const { id, urls, user, location } = similarPhoto;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />{" "}
      <img
        src={urls.thumb || urls.small || urls.regular}
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
