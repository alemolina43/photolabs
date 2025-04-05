import { useReducer } from "react";

const initialState = {
  favoritePhotos: [],
  displayModal: false,
  selectedPhoto: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload],
      };
    case "FAV_PHOTO_REMOVED":
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(
          (id) => id !== action.payload
        ),
      };
    case "OPEN_MODAL":
      return {
        ...state,
        displayModal: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        displayModal: false,
      };
    case "SELECT_PHOTO":
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    default:
      return state;
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: "FAV_PHOTO_REMOVED", payload: photoId });
    } else {
      dispatch({ type: "FAV_PHOTO_ADDED", payload: photoId });
    }
  };

  const isFavPhotoExist = state.favoritePhotos.length > 0; //if array.length is bigger than 0

  const openModal = (photo) => {
    dispatch({ type: "SELECT_PHOTO", payload: photo });
    dispatch({ type: "OPEN_MODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
    dispatch({ type: "SELECT_PHOTO", payload: null });
  };

  return {
    state,
    isFavPhotoExist,
    updateToFavPhotoIds,
    openModal,
    closeModal,
  };
}
