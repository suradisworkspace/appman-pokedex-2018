const initialState = {
  myDex: [],
};

export const action = {
  addCard: (card) => ({
    type: actionTypes.ADD_CARD,
    payload: card,
  }),
};

const actionTypes = {
  ADD_CARD: "ADD_CARD",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return {
        ...state,
        myDex: [...state.myDex, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
