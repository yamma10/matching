import axios from "axios";

export const studentLoginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post("auth/student/login",user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({type: "LOGIN_ERROR", payload: err })
    alert(err.response.data)
  }
};

export const teacherLoginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post("auth/teacher/login",user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({type: "LOGIN_ERROR", payload: err })
    alert(err.response.data)
  }
};

