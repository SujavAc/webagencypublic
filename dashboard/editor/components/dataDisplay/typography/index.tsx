import * as React from 'react';
import Box from '@mui/material/Box';
import Typography, {TypographyProps} from '@mui/material/Typography';

interface TypographyComponenetProps extends TypographyProps {
    text: string
}

export default function TypographyComponenet(props: TypographyComponenetProps) {
    const { text, ...rest } = props;
  return (
    <Typography {...rest}>
        {text}
    </Typography>
      
  );
}
