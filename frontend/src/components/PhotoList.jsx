import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, updateToFavPhotoIds, openModal }) => {
  const parsedPhotos = photos.map((photoData) => (
    <PhotoListItem
      key={photoData.id}
      photoData={photoData}
      updateToFavPhotoIds={updateToFavPhotoIds}
      openModal={openModal}
    />
  ));

  return <ul className="photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
