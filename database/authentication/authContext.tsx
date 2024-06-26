import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useSnackbar } from "notistack";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getUser } from "../user/action";
import { notiStack } from "@/store/action/notistackAction";
import { auth } from "../config";
import { useRouter } from "next/navigation";

export interface User {
  uid?: string | null;
  accessToken?: string | null;
  siginMethod?: string | null;
  type?: UserType;
  userInfo?: UserInfo;
}

export enum UserType {
  CLIENT = "client",
  ORGANISER = "organiser",
  ADMIN = "admin",
}

interface UserInfo {
  createdAt?: string | null;
  displayName?: string | null;
  email?: string | null;
  emailVerified?: boolean | null;
  lastLoginAt?: string | null;
  lastRefreshAt: string | null;
  localId?: string | null;
  photoUrl?: string | null;
}

const userAuthContext = createContext<any>({
  user: {},
  logIn: (email: string, password: string) => {},
  signUp: () => {},
  logOut: () => {},
  resetPassword: () => {},
  loginWithGoogle: () => {},
  signUpWithGoogle: (type: UserType) => {},
});

export function UserAuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>({});
  const [loading, setLoading] = useState<boolean>(true);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const userDataInReduxStore = useAppSelector(
    (state) => state.userInfo.userData
  );
  const router = useRouter();

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }
  function logOut() {
    const resData: notiStack = {
      message: "Sorry to see you go...",
      variant: "info",
    };
    enqueueSnackbar(resData);
    router.push("/signin");
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        getUser(currentuser?.uid)
          .then((doc) => {
            const user = doc?.data();
            if (user) {
              setUser(user);
              dispatch({
                type: "SET_USER_DATA",
                payload: user,
              });
              setLoading(false);
              return;
            }
          })
          .catch((e) => {
            setLoading(false);
          });
      } else {
        setUser({});
        dispatch({
          type: "SET_USER_DATA",
          payload: {},
        });
        setLoading(false);
      }
    });
    return () => {
      if (
        userDataInReduxStore && // 👈 null and undefined check
        Object.keys(userDataInReduxStore).length === 0 &&
        Object.getPrototypeOf(userDataInReduxStore) === Object.prototype
      ) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, resetPassword }}
    >
      {loading ? null : children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
