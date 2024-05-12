import React, { useEffect, useState } from "react";
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
  const { addItemInLocalStorage, getItemInLocalStorage } = useLocalStorage();

  const cookieConsentData = getItemInLocalStorage("cookieConsent");
  const handleClose = () => {
    setOpen(false);
    addItemInLocalStorage("cookieConsent", "true");
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (cookieConsentData && cookieConsentData?.length > 0) {
      const truthy = cookieConsentData[0].data === "true";
      return setOpen(!truthy);
    }
  }, [cookieConsentData]);

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
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
