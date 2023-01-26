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

export const teacherUpdate = async (user, dispatch) => {
  dispatch({ type: "UPDATE_USER" });
  try {
    // const res = await axios.put(`users/teacher/${user._id}`, user);
    // console.log(user._id)
    //ローカルストレージのuserから
    const currentUser = localStorage.getItem("user");
    const response = await axios.get(`/users/teacher/${currentUser._id}`)
    console.log(response);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data})
  } catch(err) {
    dispatch({type: "LOGIN_ERROR", payload: err })
    alert(err.response.data)
  }
}

export const studentUpdate = async (user, dispatch) => {
  dispatch({ type: "UPDATE_USER" });
  try {
    // const res = await axios.put(`users/student/${user.userId}`, user);
    //ローカルストレージのuserから
    const currentUser = localStorage.getItem("user");

    const response = await axios.get(`/users/student/${currentUser._id}`)
    console(response)
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data})
  } catch(err) {
    dispatch({type: "LOGIN_ERROR", payload: err })
    alert(err.response.data)
  }
}