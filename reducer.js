export const initialState = {
  enrolled: [],
  certificates:[],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TO ENROLLED":
      return {
        ...state,
        enrolled: [...state.enrolled, action.item],
      };
      case "ADD TO CERTIFICATES":
        return {
          ...state,
          certificates: [...state.certificates, action.item],
        };
    case "REMOVE FROM ENROLLED":
      const indexx = state.enrolled.findIndex((item) => item.id === action.id);
      let newEnrolled = [...state.enrolled];
      if (indexx >= 0) {
        newEnrolled.splice(indexx, 1);
        return {
          ...state,
          enrolled: newEnrolled,
        };
      } else
        console.warn(
          `Can't remove product having id ${action.id} as it is not present in the basket`
        );
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_ENROLLED":
      return {
        ...state,
        enrolled: [],
      };

    default:
      return state;
  }
};
