const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_GIF':
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}
export default reducer;