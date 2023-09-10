export const VIDEO = 'VIDEO';
export const STATE = 'STATE';
export const SEARCH_VALUE = 'SEARCH_VALUE';
export const INPUT_VALUE = 'INPUT_VALUE';
export const TITLE = 'TITLE';
export const SAVED_REQUESTS = 'SAVED_REQUESTS';

// const [isModalOpen, setIsModalOpen] = useState(false);


export const setVideo = (video) => ({
  type: VIDEO,
  payload: video
});
export const setState = (state) => ({
  type: STATE,
  payload: state
});
export const setSearchValue = (searchValue) => ({
  type: SEARCH_VALUE,
  payload: searchValue
});
export const setInputValue = (inputValue) => ({
  type: INPUT_VALUE,
  payload: inputValue
});
export const setTitle = (title) => ({
  type: TITLE,
  payload: title
});
export const setSavedRequests = (savedRequests) => ({
  type: SAVED_REQUESTS,
  payload: savedRequests
});


