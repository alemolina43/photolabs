import { useState } from "react";

export default function useApplicationData() {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const updateToFavPhotoIds = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      const updatedFavorites = favoritePhotos.filter((id) => id !== photoId);
      setFavoritePhotos(updatedFavorites);
    } else {
      const updatedFavorites = [...favoritePhotos, photoId];
      setFavoritePhotos(updatedFavorites);
    }
  };
  const isFavPhotoExist = favoritePhotos.length > 0; //if array.length is bigger than 0

  //state related to the modal
  const [displayModal, setDisplayModal] = useState(false);

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
    setSelectedPhoto(null);
  };

  return {
    favoritePhotos,
    displayModal,
    isFavPhotoExist,
    selectedPhoto,
    updateToFavPhotoIds,
    openModal,
    closeModal,
  };
}
