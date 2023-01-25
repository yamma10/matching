import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態
const initialState = {
  // user: null,
  user: {

    _id: "63cb6815a1dccc840600291d",
    username: "大和",
    email: "yamato@email.com",
    password: "123456",
    profilePicture: "/monster/Icon01.png",
    coverPicture: "",
    subject: "",
    city: "saga",
    method: false,
    type:  false,
  },
  isFetching: false,
  error: false,
};

//グローバルコンテキストを作成
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer,initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {/* index.jsを<AuthContextProvider>で囲ったのでchildrenはApp.jsになる */}
      {children}
    </AuthContext.Provider>
  )
}