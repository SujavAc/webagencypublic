import * as React from "react";
import { SnackbarProvider, closeSnackbar } from "notistack";
import Messages from "./Messages";
import CommonButtonWrapper from "@/dashboard/editor/components/common/Inputs/Button";

interface MySnackbarProps {
  children?: React.ReactElement;
}

const MySnackbarStack = (props: MySnackbarProps) => {
  const { children } = props;

  return (
    <SnackbarProvider
      maxSnack={3}
      action={(snackbarId) => (
        <CommonButtonWrapper
          onClick={() => closeSnackbar(snackbarId)}
          iconButton
          startIcon="Cancel"
          color="inherit"
        />
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
