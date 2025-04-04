import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ toggleDisplay }) => {
  const handleCloseButtonClick = () => {
    toggleDisplay();
  };

  return (
    <div className="photo-details-modal">
      <button
        onClick={handleCloseButtonClick}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
