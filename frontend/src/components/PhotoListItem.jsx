import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { urls, user, location } = props.sampleDataForPhotoListItem;

  return (
    <section>
      <img src={urls.regular} alt="photo of a cellphone screen" />
      <img src={user.profile} alt="photographer-pic" />
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
