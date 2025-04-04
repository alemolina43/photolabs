import PhotoFavButton from "./PhotoFavButton";

const MainPhotoModal = ({ selectedPhoto }) => {
  const { urls, user, location } = selectedPhoto;

  return (
    <>
      <PhotoFavButton />

      <img
        src={urls.regular}
        alt={urls.regular}
        className="photo-details-modal__image"
      />

      <div className="photo-details-modal__photographer-details">
        <img
          src={user.profile}
          alt={`user${user.username}`}
          className="photo-details-modal__photographer-profile "
        />

        <div className="photo-details-modal__photographer-info">
          {user.name}

          <div className="photo-details-modal__photographer-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPhotoModal;
