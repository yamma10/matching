import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

//グローバルコンテキストを作成
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer,initialState);

  //state.userが変わるごとにユーザー情報をlocalStorageにセットする
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

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