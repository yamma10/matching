import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態
const initialState = {
  user: null,
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