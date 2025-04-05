import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import MainPhotoModal from "../components/MainPhotoModal";
import SimilarPhotoList from "../components/SimilarPhotoList";

const PhotoDetailsModal = ({
  selectedPhoto,
  closeModal,
  toggleFavorite,
  favoritePhotos,
}) => {
  const handleButtonClick = () => {
    closeModal();
  };

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
            toggleFavorite={toggleFavorite}
            favoritePhotos={favoritePhotos}
          />
        </div>
        <header className="photo-details-modal__header ">
          <p>Similar Photos</p>
        </header>

        <SimilarPhotoList
          similarPhotosObject={selectedPhoto.similar_photos}
          favoritePhotos={favoritePhotos}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </>
  );
};
export default PhotoDetailsModal;
