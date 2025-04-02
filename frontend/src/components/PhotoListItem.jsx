import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  const { urls, user, location } = sampleDataForPhotoListItem;

  return (
    <section>
      <img src={urls.regular} alt={urls.regular} />
      <img src={user.profile} alt={`user${urls.username}`} />
      <p>{user.username}</p>
      <p>
        <span>{location.city}</span>
        {location.country}
        <span></span>
      </p>
    </section>
  );
};

export default PhotoListItem;
