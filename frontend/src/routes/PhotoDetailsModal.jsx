import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ selectedPhoto, closeModal }) => {
  const handleButtonClick = () => {
    closeModal();
  };

  console.log({ selectedPhoto });

  return (
    <div className="photo-details-modal">
      <button
        onClick={handleButtonClick}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
