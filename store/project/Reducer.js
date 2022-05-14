import { ADD_COLLEGE, DELETE_PROJECT } from "./Types";
import colleges from "../../data/colleges.json";
const initialState = {
  colleges: colleges,
};
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLLEGE:
      return {
        ...state,
        tasks: [
          ...state.colleges,
          {
            collegeObj: action.payload,
            done: false,
            id: Math.random().toString(),
          },
        ],
      };
    case DELETE_PROJECT:
      return {
        ...state,
        tasks: state.projects.filter((item) => item.id != action.payload),
      };
    default:
      return state;
  }
};
export default projectReducer;
