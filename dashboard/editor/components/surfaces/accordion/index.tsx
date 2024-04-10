import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { DropZone } from "@measured/puck";
import MaterialUIICon from "../../Icon";

interface IAccordionProps {
  noOfItems: IAccordionItem[];
}

interface IAccordionItem {
  heading: string;
  headingIcon: string;
  defaultOpen: boolean;
}

export default function AccordionComponent(props: IAccordionProps) {
  const { noOfItems } = props;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  React.useEffect(() => {
    if (noOfItems && noOfItems?.length > 0) {
      setExpanded(noOfItems[0]?.heading);
    }
  }, [noOfItems]);

  return (
    <div>
      {noOfItems &&
        noOfItems.map((item, index) => (
          <Accordion
            expanded={expanded === item?.heading || item?.defaultOpen}
            key={item?.heading}
            onChange={handleChange(item?.heading)}
          >
            <AccordionSummary
              expandIcon={
                <MaterialUIICon name={item?.headingIcon} color="primary" />
              }
              aria-controls={item?.heading}
              id={item?.heading}
            >
              {item?.heading}
            </AccordionSummary>
            <AccordionDetails>
              <DropZone zone={`Content ${item?.heading || index} Zone`} />
            </AccordionDetails>
            <AccordionActions>
              <DropZone zone={`Button ${item?.heading || index} Zone`} />
            </AccordionActions>
          </Accordion>
        ))}
    </div>
  );
}
