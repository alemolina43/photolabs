import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  const parsedPhotos = photos.map((photoData) => (
    <PhotoListItem key={photoData.id} photoData={photoData} />
  ));

  return <ul className="photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
