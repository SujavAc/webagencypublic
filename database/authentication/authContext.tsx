import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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
    (state) => state.userInfo.userData,
  );
  const router = useRouter();

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
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
  // function loginWithGoogle() {
  //   return signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       // const credential = GoogleAuthProvider.credentialFromResult(result);
  //       // const token = credential?.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       const successData = {
  //         message: `Logged in successfully, ${user.displayName}`,
  //         variant: "success",
  //       };
  //       enqueueSnackbar(successData);
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       // const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       // const email = error.email;
  //       // The AuthCredential type that was used.
  //       // const credential = GoogleAuthProvider.credentialFromError(error);
  //       const errorData = {
  //         message: errorMessage,
  //         variant: "error",
  //       };
  //       enqueueSnackbar(errorData);
  //     });
  // }
  // function signUpWithGoogle(userType: UserType) {
  //   return signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       // const credential = GoogleAuthProvider.credentialFromResult(result);
  //       // const token = credential?.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       getUser(user?.uid)
  //         .then((doc) => {
  //           const userData = doc?.data();
  //           if (userData) {
  //             return;
  //           } else {
  //             const userInfo =
  //               user && getUserDataFromGoogleSignUp(user, userType);
  //             userInfo &&
  //               setUserInfo(userInfo)
  //                 .then(() => {
  //                   const resData: snackbarError = {
  //                     message: "Successfully register",
  //                     variant: "success",
  //                   };
  //                   enqueueSnackbar(resData);
  //                   setUser(userInfo);
  //                 })
  //                 .catch((error) => {
  //                   console.log(error);
  //                   const resData: snackbarError = {
  //                     message: error.message,
  //                     variant: "error",
  //                   };
  //                   enqueueSnackbar(resData);
  //                 });
  //           }
  //         })
  //         .catch((error) => {
  //           const resData: snackbarError = {
  //             message: error.message,
  //             variant: "error",
  //           };
  //           enqueueSnackbar(resData);
  //         });
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       // const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       // const email = error.email;
  //       // The AuthCredential type that was used.
  //       // const credential = GoogleAuthProvider.credentialFromError(error);
  //       const errorData: snackbarError = {
  //         message: errorMessage,
  //         variant: "error",
  //       };
  //       enqueueSnackbar(errorData);
  //     });
  // }

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
    <userAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
      {loading ? null : children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
