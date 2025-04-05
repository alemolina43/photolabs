import SimilarPhotoListItem from "./SimilarPhotoListItem";
import "../styles/PhotoList.scss";

const SimilarPhotoList = ({
  similarPhotosObject,
  toggleFavorite,
  favoritePhotos,
}) => {
  // Convert the object of similar photos into an array
  const similarPhotosArray = Object.values(similarPhotosObject);

  const parsedSimilar = similarPhotosArray.map((photo) => (
    <SimilarPhotoListItem
      key={photo.id}
      similarPhoto={photo}
      toggleFavorite={toggleFavorite}
      favoritePhotos={favoritePhotos}
    />
  ));

  return <ul className="photo-list">{parsedSimilar}</ul>;
};

export default SimilarPhotoList;
