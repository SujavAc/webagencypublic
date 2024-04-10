import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";
import Button, { ButtonProps } from "@mui/material/Button";

interface ICardProps {
  image?: CardMediaProps;
  cardContent?: React.ReactElement;
  actionButton?: ActionButton[];
}

interface ActionButton {
  label: string;
  rest: ButtonProps;
}

export default function CardComponent(props: ICardProps) {
  const { image, actionButton, cardContent } = props;
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} {...image} />
      {cardContent && <CardContent>{cardContent}</CardContent>}
      <CardActions>
        {actionButton?.map(({ label, rest }) => (
          <Button size="small" {...rest} key={label}>
            {label}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}
