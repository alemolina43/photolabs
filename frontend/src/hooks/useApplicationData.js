import { useReducer, useEffect } from "react";

const initialState = {
  photoData: [],
  topicData: [],
  favoritePhotos: [],
  displayModal: false,
  selectedPhoto: null,
  selectedTopic: null,
};

export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SELECT_PHOTO: "SELECT_PHOTO",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
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
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        selectedTopic: action.payload,
      };
    default:
      return state;
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      const topicId = state.selectedTopic;
      fetch(`/api/topics/${topicId}/photos`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state.selectedTopic, dispatch]);

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

  const selectTopic = (topicId) => {
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: topicId });
  };

  return {
    state,
    updateToFavPhotoIds,
    openModal,
    closeModal,
    selectTopic,
  };
}
