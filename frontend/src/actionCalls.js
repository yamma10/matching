import axios from "axios";

export const studentLoginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post("auth/student/login");
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({type: "LOGIN_ERROR", payload: err })
  }
};

export const teacherLoginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post("auth/teacher/login");
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({type: "LOGIN_ERROR", payload: err })
  }
};