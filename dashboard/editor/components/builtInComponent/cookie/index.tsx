import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Transition } from "../../animation";
import { useLocalStorage } from "@/database/localStorageContext";
import ButtonWrapper from "../../common/Inputs/Button";

export interface ICookieConsent {
  animationType:
    | "TransitionUp"
    | "TransitionDown"
    | "TransitionLeft"
    | "TransitionRight"
    | string;
  id: string;
  dialogTitle: string;
  dialogContent: string;
}

export enum AnimationType {
  TRANSITIONUP = "TransitionUp",
  TRANSITIONDOWN = "TransitionDown",
  TRANSITIONLEFT = "TransitionLeft",
  TRANSITIONRIGHT = "TransitionRight",
}

const CookieConsent = (props: ICookieConsent) => {
  const {
    id,
    animationType = "TransitionUp",
    dialogContent,
    dialogTitle,
  } = props;
  const [open, setOpen] = useState(true);
  const { addItemInLocalStorage } = useLocalStorage();

  const handleClose = () => {
    setOpen(false);
    addItemInLocalStorage("cookieConsent", "true");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition[animationType]}
      id={id}
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonWrapper
          onClick={handleClose}
          color="primary"
          variant="contained"
        >
          Agree
        </ButtonWrapper>
      </DialogActions>
    </Dialog>
  );
};

export default CookieConsent;
