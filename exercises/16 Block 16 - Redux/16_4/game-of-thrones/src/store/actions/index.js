import charAPI from "../../services/charAPI";

export const LOAD = "LOAD";
export const ADD_CHAR = "CHAR";
export const ERR = "ERR";

//todas as 3 usadas no thunk assyncName
export const actionLoad = () => {
  return {
    type: LOAD,
  };
};

export const actionAddChar = (char) => {
  return {
    type: ADD_CHAR,
    char,
  };
};

export const actionErr = (err) => {
  return {
    type: ERR,
    err,
  };
};

export function assyncNameThunk(char) {
  return (dispatch) => {
    dispatch(actionLoad());
    return charAPI(char).then(
      (json) => dispatch(actionAddChar(json)),
      (error) => dispatch(actionErr(error.message))
    );
  };
}
