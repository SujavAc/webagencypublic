import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { DropZone } from "@measured/puck";
import MaterialUIICon from "../../Icon";

interface IAccordionProps {
  heading: string;
  className: string;
  headingIcon: string;
  defaultOpen: boolean;
}

export default function AccordionComponent(props: IAccordionProps) {
  const { className, defaultOpen, heading, headingIcon, ...rest } = props;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === defaultOpen}
        key={heading}
        onChange={handleChange(heading)}
        className={className}
        {...rest}
      >
        <AccordionSummary
          expandIcon={<MaterialUIICon name={headingIcon} color="primary" />}
          aria-controls={heading}
          id={heading}
        >
          {heading}
        </AccordionSummary>
        <AccordionDetails>
          <DropZone zone={`Content ${heading} Zone`} />
        </AccordionDetails>
        <AccordionActions>
          <DropZone zone={`Button ${heading} Zone`} />
        </AccordionActions>
      </Accordion>
    </div>
  );
}
