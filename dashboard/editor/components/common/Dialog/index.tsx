import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IDialogProps {
  dialogProps?: DialogProps;
  buttonProps: ButtonProps;
  dialogTitle?: string;
  dialogContentText?: React.ReactElement;
  actionButton?: DialogActionButton[];
}

interface DialogActionButton {
  label: string;
  onClick: () => void;
}

export default function AnimateDialog(props: IDialogProps) {
  const {
    buttonProps,
    dialogProps,
    dialogTitle,
    dialogContentText,
    actionButton,
  } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (onClick) => {
    if (onclick) {
      onClick();
    }
    setOpen(true);
  };

  const handleClose = (onClick) => {
    if (onclick) {
      onClick();
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      {buttonProps && (
        <Button
          variant="outlined"
          {...buttonProps}
          onClick={() => handleClickOpen(buttonProps?.onClick)}
        />
      )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        {...dialogProps}
      >
        {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
        {dialogContentText && (
          <DialogContent>{dialogContentText}</DialogContent>
        )}
        {actionButton && (
          <DialogActions>
            {actionButton.map(({ onClick, label }) => (
              <Button onClick={() => handleClose(onClick())} key={label}>
                {label}
              </Button>
            ))}
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
}
