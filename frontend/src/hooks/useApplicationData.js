import { useReducer } from "react";

const initialState = {
  favoritePhotos: [],
  displayModal: false,
  selectedPhoto: null,
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SELECT_PHOTO: "SELECT_PHOTO",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(
          (id) => id !== action.payload
        ),
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        displayModal: true,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        displayModal: false,
      };
    case ACTIONS.SELECT_PHOTO:
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
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  };

  return {
    state,
    updateToFavPhotoIds,
    openModal,
    closeModal,
  };
}
