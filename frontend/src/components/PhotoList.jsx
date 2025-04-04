import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, toggleDisplay }) => {
  const parsedPhotos = photos.map((photoData) => (
    <PhotoListItem
      key={photoData.id}
      photoData={photoData}
      toggleFavorite={toggleFavorite}
      toggleDisplay={toggleDisplay}
    />
  ));

  return <ul className="photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
