import { useSnackbar } from "notistack";
import { useAppSelector } from "@/store/hook";
import { useEffect } from "react";

const Messages = () => {
  const { enqueueSnackbar } = useSnackbar();
  const notiStack = useAppSelector(
    (state) => state.notistackMessage.snackbarData,
  );
  useEffect(() => {
    if (
      notiStack &&
      typeof notiStack === "object" &&
      Object.keys(notiStack).length !== 0
    ) {
      enqueueSnackbar(notiStack);
    }
  }, [notiStack, enqueueSnackbar]);

  return null;
};
export default Messages;
