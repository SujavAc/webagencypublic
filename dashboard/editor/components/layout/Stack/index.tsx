import * as React from 'react';
import Stack from '@mui/material/Stack';
import { DropZone } from '@measured/puck';

export default function StackLayout({noOfItems, stackProps}) {
  return (
    <Stack {...stackProps}>
        {noOfItems && noOfItems?.map((item, index) => (<DropZone zone={`${item?.title}-${index}`} key={`${item?.title}-${index}`}/>))}
    </Stack>
  );
}