import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import MainPhotoModal from "../components/MainPhotoModal";
// import SimilarPhotoList from "../components/SimilarPhotoList";
import PhotoList from "../components/PhotoList";

const PhotoDetailsModal = ({
  selectedPhoto,
  closeModal,
  updateToFavPhotoIds,
  favoritePhotos,
}) => {
  const handleButtonClick = () => {
    closeModal();
  };

  const photos = Object.values(selectedPhoto.similar_photos); //added this line to pass the same param

  return (
    <>
      <div className="photo-details-modal">
        <button
          onClick={handleButtonClick}
          className="photo-details-modal__close-button"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>

        <div className="photo-details-modal__images">
          <MainPhotoModal
            selectedPhoto={selectedPhoto}
            updateToFavPhotoIds={updateToFavPhotoIds}
            favoritePhotos={favoritePhotos}
          />
        </div>
        <header className="photo-details-modal__header">
          <p>Similar Photos</p>
        </header>

        <PhotoList
          photos={photos} //modified this to pass to PhotoList
          favoritePhotos={favoritePhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      </div>
    </>
  );
};
export default PhotoDetailsModal;
