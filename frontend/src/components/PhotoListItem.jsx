import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  const { urls, user, location } = sampleDataForPhotoListItem;

  return (
    <div className="photo-list__item">
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
        <p>{user.username}</p>
        <p>
          <span>{location.city}</span>
          {location.country}
          <span></span>
        </p>
      </div>
    </div>
  );
};

export default PhotoListItem;
