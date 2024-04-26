import { DropZone } from "@measured/puck";
import React, { useState } from "react";
import ButtonWrapper, { ButtonWrapperProps } from "../../inputs/button";

interface CopyTextProps extends ButtonWrapperProps {
  textToCopy: string;
}
const CopyTextComponent = (props: CopyTextProps) => {
  const { textToCopy, ...rest } = props;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        console.log(textToCopy);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div>
      <ButtonWrapper {...rest} onClick={copyToClipboard} />
      {copied && <span>Copied</span>}
    </div>
  );
};

export default CopyTextComponent;
