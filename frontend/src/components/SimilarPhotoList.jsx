import SimilarPhotoListItem from "./SimilarPhotoListItem";

const SimilarPhotoList = ({ similarPhotosObject }) => {
  // Convert the object of similar photos into an array
  const similarPhotosArray = Object.values(similarPhotosObject);

  const parsedSimilar = similarPhotosArray.map((photo) => (
    <SimilarPhotoListItem key={photo.id} similarPhoto={photo} />
  ));

  return <ul className="similar-photo-list">{parsedSimilar}</ul>;
};

export default SimilarPhotoList;
