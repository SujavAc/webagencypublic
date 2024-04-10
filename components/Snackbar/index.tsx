import * as React from "react";
import { SnackbarProvider, closeSnackbar } from "notistack";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Messages from "./Messages";

interface MySnackbarProps {
  children?: React.ReactElement;
}

const MySnackbarStack = (props: MySnackbarProps) => {
  const { children } = props;

  return (
    <SnackbarProvider
      maxSnack={3}
      action={(snackbarId) => (
        <button onClick={() => closeSnackbar(snackbarId)}>
          <CancelRoundedIcon />
        </button>
      )}
      autoHideDuration={3000}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <>
        <Messages />
        {children}
      </>
    </SnackbarProvider>
  );
};
export default MySnackbarStack;
