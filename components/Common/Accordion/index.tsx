import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ButtonComponent from "../Button";

interface IAccordionProps {
  heading: string;
  headingIcon: React.ReactElement;
  content: React.ReactElement;
  action: IAccordionButtonAction[];
}

interface IAccordionButtonAction {
  buttonLabel: string;
  onClick: () => void;
}

export default function AccordionComponent(props: IAccordionProps) {
  const { heading, headingIcon, content, action } = props;
  return (
    <div>
      <Accordion defaultExpanded key={heading}>
        <AccordionSummary
          expandIcon={headingIcon}
          aria-controls={heading}
          id={heading}
        >
          {heading}
        </AccordionSummary>
        <AccordionDetails>{content}</AccordionDetails>
        <AccordionActions>
          {action.map(({ buttonLabel, ...restActionProps }, index) => (
            <ButtonComponent key={buttonLabel} {...restActionProps}>
              {buttonLabel}
            </ButtonComponent>
          ))}
        </AccordionActions>
      </Accordion>
    </div>
  );
}
