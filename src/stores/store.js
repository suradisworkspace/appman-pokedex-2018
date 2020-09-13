const initialState = {
  myDex: [],
};

export const action = {
  addCard: (card) => ({
    type: actionTypes.ADD_CARD,
    payload: card,
  }),
  removeCard: (card) => ({
    type: actionTypes.REMOVE_CARD,
    payload: card,
  }),
};

const actionTypes = {
  ADD_CARD: "ADD_CARD",
  REMOVE_CARD: "REMOVE_CARD",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return {
        ...state,
        myDex: [...state.myDex, action.payload],
      };
    case actionTypes.REMOVE_CARD:
      return {
        ...state,
        myDex: state.myDex.filter((card) => card.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
