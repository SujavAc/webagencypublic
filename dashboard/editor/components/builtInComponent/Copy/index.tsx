import React, { useState } from "react";
import ButtonWrapper, { ButtonWrapperProps } from "../../common/Inputs/Button";
import CommonTooltip from "../../common/dataDisplay/tooltip";

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
        setTimeout(() => setCopied(false), 1000); // Reset copied state after 1 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div>
      <CommonTooltip title="Copy">
        <ButtonWrapper {...rest} onClick={copyToClipboard} />
      </CommonTooltip>
      {copied && <span>Copied</span>}
    </div>
  );
};

export default CopyTextComponent;
